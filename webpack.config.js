const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "main.js",
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ },
    ],
  },
};
