const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "./public/main.js",
    publicPath: '/',
  },
  devServer: {
    inline:true,
    port: 8008,
    historyApiFallback: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.s[ac]ss$/i, use: ["style-loader", "css-loader", "sass-loader", ],},
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader?name=/[name].[ext]', options: {esModule: false,},},
    ],
  },
};
