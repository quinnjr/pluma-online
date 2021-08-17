#!/usr/bin/env -S ts-node --compiler-options "{\"module\":\"commonjs\"}"

import axios from 'axios';
import domino from 'domino';
import { writeFileSync } from 'fs';
import { join } from 'path';
import prettier from 'prettier';
import { ESLint } from 'eslint';
import { Category, Language } from '@prisma/client';
import { PluginCreateInput } from '../server/@generated/prisma-graphql/plugin';

const url = 'https://biorg.cs.fiu.edu/pluma/plugins.html';

async function main() {
  let pluginsPage = `
import { PluginCreateInput } from '../server/@generated/prisma-graphql/plugin';
import { Category, Language } from '../server/@generated/prisma-graphql/prisma';

export const Plugins: PluginCreateInput[] = [
`;

  const data = await axios.get(url, {
    responseType: 'text'
  });

  const window = domino.createWindow(data.data);
  const document = window.document;

  const tables = document.querySelectorAll('table');

  for (let i = 2; i < tables.length; i++) {
    const section = tables[i];

    const rows = section.querySelectorAll('tr');

    for (let j = 1; j < rows.length; j++) {
      const columns = rows[j].querySelectorAll('td');

      const name = columns[0].querySelector('a')?.textContent;
      const githubUrl = columns[0].querySelector('a')?.href;
      const description = columns[1].innerHTML;

      let language = columns[2].innerHTML;

      if (name !== undefined && githubUrl !== undefined) {
        pluginsPage += `  {
    name: '${name}',\n`;

        if (description.indexOf("'") > -1) {
          pluginsPage += `    description: "${description}",\n`;
        } else {
          pluginsPage += `    description: '${description}',\n`;
        }

        pluginsPage += `    githubUrl: '${githubUrl}',\n`;

        if (language === 'R') {
          pluginsPage += '    language: Language.R,\n';
        } else if (language === 'Python') {
          pluginsPage += '    language: Language.Python,\n';
        } else if (language === 'Perl') {
          pluginsPage += '    language: Language.Perl,\n';
        } else if (language.indexOf('C++')) {
          pluginsPage += '    language: Language.CXX,\n';
        } else {
          pluginsPage += '    language: Language.CUDA,\n';
        }

        switch (i) {
          case 2:
            pluginsPage += '    category: Category.FileConverters';
            break;
          case 3:
            pluginsPage += '    category: Category.StatsVisualizations';
            break;
          case 4:
            pluginsPage += '    category: Category.Transformations';
            break;
          case 5:
            pluginsPage += '    category: Category.Dissimilarity';
            break;
          case 6:
            pluginsPage += '    category: Category.Correlation';
            break;
          case 7:
            pluginsPage += '    category: Category.Centrality';
            break;
          case 8:
            pluginsPage += '    category: Category.Clustering';
            break;
          case 9:
            pluginsPage += '    category: Category.TimeSeries';
            break;
          case 10:
            pluginsPage += '    category: Category.ExternalTools';
            break;
          case 11:
            pluginsPage += '    category: Category.Miscellaneous';
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

  pluginsPage = pluginsPage.substring(0, pluginsPage.length - 2);

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
