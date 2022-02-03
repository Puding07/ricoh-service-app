const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { resolve } = require("path");
const { GenerateSW } = require("workbox-webpack-plugin");
const fs = require("fs");

const cleanOptions = {
  root: __dirname,
  verbose: true,
  dry: false,
  exclude: [],
};

module.exports = {
  entry: [
    "react-hot-loader/patch",
    //activate HMR for React

    "webpack-dev-server/client?http://127.0.0.1:8080",
    //bundle the client for webpack dev server
    //and connect to the provided endpoint

    "webpack/hot/only-dev-server",
    //bundle the client for hot reloading
    //only- means to only hot reload for successful updates

    "./src/dev.js",
  ],

  mode: "development",
  output: {
    path: resolve(__dirname, "./dist"),
    publicPath: "/",
    filename: "[name].bundle.js",
  },
  devServer: {
    hot: true,
    contentBase: "/dist",
    publicPath: "/",
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ["file-loader", "img-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(cleanOptions),
    new CopyPlugin({
      patterns: [
        {
          from: "static/*",
          to({ context, absoluteFilename }) {
            return "[name][ext]";
          },
        },
      ],
    }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  resolve: {
    alias: {
      "react/lib/ReactDom": "react-dom/lib/ReactDom",
    },
    extensions: [".js", ".jsx"],
  },
};
