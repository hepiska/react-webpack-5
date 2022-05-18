const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      path: './prod.env'
    }),
    new CopyPlugin({
      patterns: [{ from: 'public', to: '.' }]
    })
  ]
};
