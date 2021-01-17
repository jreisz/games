const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "./public/main.js",
  },
  devServer: {
    inline:true,
    port: 8008
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
    ],
  },
};
