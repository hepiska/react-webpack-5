const {merge} = require("webpack-merge")
const commonConfig =  require("./webpack.common")

const configFactory = async (args) => {
  if (typeof args !== 'object') return {};
  const { env, addon } = args;
  const envConfig = require(`./webpack.${env}.js`)
  return merge(commonConfig, envConfig);
};

module.exports = configFactory