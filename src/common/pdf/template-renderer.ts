import * as fs from 'fs';
import * as path from 'path';
import * as Handlebars from 'handlebars';

function getTemplatesBasePath(): string {
  // якщо запущено через ts-node / start:dev
  if (process.env.NODE_ENV !== 'PRODUCTION') {
    return path.join(
      process.cwd(),
      'src',
      'modules',
      'pdf',
      'templates',
    );
  }

  // production / dist
  return path.join(
    process.cwd(),
    'dist',
    'modules',
    'pdf',
    'templates',
  );
}

export function renderTemplate(
  templateName: string,
  context: Record<string, any>,
): string {
  const templatePath = path.join(
    getTemplatesBasePath(),
    `${templateName}.hbs`,
  );

  if (!fs.existsSync(templatePath)) {
    throw new Error(`PDF template not found: ${templatePath}`);
  }

  const source = fs.readFileSync(templatePath, 'utf-8');
  //helpers
  Handlebars.registerHelper('eq', (a, b) => a == b);
  Handlebars.registerHelper('for', function(from, to, incr, block) {
    var accum = '';
    for (var i = from; i < to; i += incr) {
      accum += block.fn(i);
    }
    return accum;
  });

  //helpers
  const template = Handlebars.compile(source);

  return template(context);
}
