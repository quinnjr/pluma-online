#!/usr/bin/env -S ts-node --compiler-options "{\"module\":\"commonjs\"}"

import axios from 'axios';
import domino from 'domino';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import prettier from 'prettier';
import { ESLint } from 'eslint';

const baseUrl = 'https://biorg.cs.fiu.edu/pluma/';

async function main() {

  let pluginsPage = `export const Plugins: any = [\n`;

  const plugins: {
    name: string;
    githubUrl: string;
    description: string;
    language: string;
    category: string;
  }[] = [];

  let data = await axios.get(baseUrl + 'plugins.html', {
    responseType: 'text'
  });

  let window = domino.createWindow(data.data);
  let document = window.document;

  let tables = document.querySelectorAll('table');

  for (let i = 0; i < tables.length; i++) {
    const columns = tables[i].querySelectorAll('td');

    for (let j = 0; j < columns.length; j++) {
      const item = columns[j].querySelector('a');

      if (item) {
        const href = baseUrl+ item.href;
        const regexp = new RegExp('^\/(\w+)\.html')
        const categoryInfo = /^\/(\w+)\.html/i.exec(item.href);
        let category;
        if (categoryInfo && categoryInfo[1]) {
          category = categoryInfo[1];
        }

        const data = await axios.get(href, {
          responseType: 'text'
        });

        window = domino.createWindow(data.data);
        document = window.document;

        tables = document.querySelectorAll('table');

        for (let k = 0; k < tables.length; k++) {
          const rows = tables[k].querySelectorAll('tr');

          for (let l = 1; l < rows.length; l++) {
            const columns = rows[l].querySelectorAll('td');

            if (columns && columns.length === 3) {
              const a = columns[0].querySelector('a')!;
              const name = a!.innerHTML;
              const githubUrl = a!.href;
              const description = columns[1].innerHTML;
              const language = columns[2].innerHTML;

              const plugin = {
                name,
                githubUrl,
                description,
                language,
                category
              };

              plugins.push(plugin);
            }
          }
        }
      }
    }
  }

  for (const plugin of plugins) {
    pluginsPage += `  {\n    name: '${plugin.name}',\n`;

    plugin.description.includes("'")
      ? (pluginsPage += `    description: "${plugin.description.replace(
          '\n',
          ''
        )}",\n`)
      : (pluginsPage += `    description: '${plugin.description.replace(
          '\n',
          ''
        )}',\n`);

    pluginsPage += `    githubUrl: '${plugin.githubUrl}',\n`;
    pluginsPage += `    language: '${plugin.language}',\n`
    pluginsPage += `    category: '${plugin.category}'\n`
    pluginsPage += `  },\n`;
  }

  pluginsPage = pluginsPage.slice(0, -2); // Death to trailing commas

  pluginsPage += '\n];';

  console.log(pluginsPage);

  return pluginsPage;
}

main()
  .then(async (plugins: string) => {
    const config: any = await prettier.resolveConfig(join(__dirname, '../'));

    prettier.format(plugins, config);

    const eslint = new ESLint({
      useEslintrc: true,
      fix: true
    });

    const eslintConfig = await eslint.calculateConfigForFile(
      join(__dirname, '../.eslintrc.json')
    );

    const pluginsResult = await eslint.lintText(plugins, {
      filePath: eslintConfig.filePath
    });

    writeFileSync(
      join(__dirname, '../', 'prisma', 'plugins.ts'),
      pluginsResult[0].output
        ? (pluginsResult[0].output as string)
        : (pluginsResult[0].source as string)
    );
  })
  .catch(console.error);
