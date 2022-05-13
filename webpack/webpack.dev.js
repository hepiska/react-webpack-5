require("webpack-dev-server")
const webpack = require("webpack")

const devConfig = {
  mode: 'development',
  devtool: 'nosources-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: './public',
    hot: true,
    historyApiFallback: true,
    port: 8080,
  },
};

module.exports = devConfig