const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const cleanOptions = {
  root: __dirname,
  verbose: true,
  dry: false,
  exclude: [],
};

module.exports = {
  entry: {
    server: ["babel-polyfill", "./src/server.js"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js",
  },
  target: "node",
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false, // if you don't put this is, __dirname
    __filename: false, // and __filename return blank or /
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        //exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(cleanOptions),
    /*new CopyPlugin({
      patterns: [
        {
          from: "archive/*",
          to({ context, absoluteFilename }) {
            return "archive/[name][ext]";
          },
        },
      ],
    }),*/
  ],
};
