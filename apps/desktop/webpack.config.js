const path = require('path');

module.exports = {
  entry: './renderer.js',
  output: {
    filename: 'renderer.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
