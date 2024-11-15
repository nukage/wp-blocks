// const postcssPrefixer = require('postcss-prefixer');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-nested'),
    // postcssPrefixer({ prefix: '.my-unique-plugin-wrapper-class ' }), // Dot included, no leading backslash
  ],
};
