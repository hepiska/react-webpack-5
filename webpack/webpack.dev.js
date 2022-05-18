const webpack = require('webpack');
const path = require('path');
require('webpack-dev-server');

const devConfig = {
  mode: 'development',
  devtool: 'nosources-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: {
      directory: path.join(__dirname, '../public')
    },
    hot: true,
    historyApiFallback: true,
    port: 8080
  }
};

module.exports = devConfig;
