const sassExtract = require('sass-extract');

const rendered = sassExtract.renderSync({
  file: './node_modules/@govuk-frontend/globals/_common.scss'
}, {
  plugins: [{ plugin: 'sass-extract-js', options: { camelCase: false } }]
});

console.log(rendered);
