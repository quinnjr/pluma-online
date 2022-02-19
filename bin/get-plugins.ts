#!/usr/bin/env -S ts-node --compiler-options "{\"module\":\"commonjs\"}"

import axios from 'axios';
import domino from 'domino';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import prettier from 'prettier';
import { ESLint } from 'eslint';

const url = 'https://biorg.cs.fiu.edu/pluma/plugins.html';

async function main() {
  let pluginsPage = `
import { PluginCreateInput } from '../server/@generated/prisma-graphql/plugin';
import { categories } from './categories';
import { languages } from './languages';

export const Plugins: PluginCreateInput[] = [
`;

  const data = await axios.get(url, {
    responseType: 'text'
  });

  const window = domino.createWindow(data.data);
  const document = window.document;

  const tables = document.querySelectorAll('table');

  for (let index = 2; index < tables.length; index++) {
    const section = tables[index];

    const rows = section.querySelectorAll('tr');

    for (let index_ = 1; index_ < rows.length; index_++) {
      const columns = rows[index_].querySelectorAll('td');

      const name = columns[0].querySelector('a')?.textContent;
      const githubUrl = columns[0].querySelector('a')?.href;
      const description = columns[1].innerHTML;

      let language = columns[2].innerHTML;

      if (name !== undefined && githubUrl !== undefined) {
        pluginsPage += `  {
    name: '${name}',\n`;

        description.includes("'")
          ? (pluginsPage += `    description: "${description.replace(
              '\n',
              ''
            )}",\n`)
          : (pluginsPage += `    description: '${description.replace(
              '\n',
              ''
            )}',\n`);

        pluginsPage += `    githubUrl: '${githubUrl}',\n`;

        switch (language) {
          case 'R':
            pluginsPage += "    language: 'R',\n";
            break;
          case 'Python':
            pluginsPage += "    language: 'Python',\n";
            break;
          case 'Perl':
            pluginsPage += "    language: 'Perl',\n";
            break;
          case 'C++':
            pluginsPage += "    language: 'C++',\n";
            break;
          default:
            pluginsPage += "    language: 'CUDA',\n";
        }

        switch (index) {
          case 2:
            pluginsPage += "    category: 'File Converters'";
            break;
          case 3:
            pluginsPage += "    category: 'Stats & Visualizations'";
            break;
          case 4:
            pluginsPage += "    category: 'Transformations'";
            break;
          case 5:
            pluginsPage += "    category: 'Dissimilarity'";
            break;
          case 6:
            pluginsPage += "    category: 'Correlation'";
            break;
          case 7:
            pluginsPage += "    category: 'Centrality'";
            break;
          case 8:
            pluginsPage += "    category: 'Clustering'";
            break;
          case 9:
            pluginsPage += "    category: 'Time Series'";
            break;
          case 10:
            pluginsPage += "    category: 'External Tools'";
            break;
          case 11:
            pluginsPage += "    category: 'Miscellaneous'";
            break;
          default:
            process.exit(1);
        }

        pluginsPage += '\n  },\n';
      } else {
        continue;
      }
    }
  }

  pluginsPage = pluginsPage.slice(0, -2);

  pluginsPage += '\n];';

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
