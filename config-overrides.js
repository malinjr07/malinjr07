const UnusedWebpackPlugin = require('unused-webpack-plugin');

module.exports = function override(config, env) {
  // Commenting out the unused-webpack-plugin due to compatibility issues
  // config.plugins.push(
  //   new UnusedWebpackPlugin({
  //     directories: ['src'],
  //     exclude: ['node_modules', 'public', 'build'],
  //     root: process.cwd(),
  //   })
  // );

  return config;
}
