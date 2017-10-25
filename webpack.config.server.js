var path = require("path");
var fs = require("fs");
var webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: ["babel-polyfill", "./src/server.js"],
  target: "node",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "server.js"
    // library: "server.js",
    // libraryTarget: "commonjs2"
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};

if (process.env.NODE_ENV === "production") {
  module.exports.devtool = "#source-map";
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    })
  ]);
}
