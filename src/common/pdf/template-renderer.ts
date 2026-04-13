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
  const templatesBasePath = getTemplatesBasePath();

  const templatePath = path.join(
    templatesBasePath,
    `${templateName}.hbs`,
  );

  if (!fs.existsSync(templatePath)) {
    throw new Error(`PDF template not found: ${templatePath}`);
  }

  const source = fs.readFileSync(templatePath, 'utf-8');
  const cssPath = path.join(
    templatesBasePath,
    'css',
    'style.css',
  );

  const resetPass = path.join(
    templatesBasePath,
    'css',
    'reset.css',
  );

  const css = fs.existsSync(cssPath)
    ? fs.readFileSync(cssPath, 'utf-8')
    : '';
  const cssReset = fs.existsSync(resetPass)
    ? fs.readFileSync(resetPass, 'utf-8')
    : '';
  //helpers
  Handlebars.registerHelper('eq', (a, b) => a == b);
  Handlebars.registerHelper('for', function(from, to, incr, block) {
    var accum = '';
    for (var i = from; i < to; i += incr) {
      accum += block.fn(i);
    }
    return accum;
  });

  Handlebars.registerHelper('includes', function (array, value, options) {
    if (Array.isArray(array) && array.includes(value)) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  Handlebars.registerHelper(
    'or',
    function (...args) {
      const options = args.pop();

      const hasTruthy = args.some(Boolean);

      return hasTruthy
        ? options.fn(this)
        : options.inverse(this);
    },
  );

  Handlebars.registerHelper('ifEquals', function (value, compare, options) {
    if (value === compare) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  //helpers
  const template = Handlebars.compile(source);

  return template({
    ...context, 
    inlineResetStyles: cssReset,
    inlineStyles: css,
  });
}
