const webpack = require("webpack");
const path = require("path");

/** @type { import('webpack').Configuration } */
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    static: path.join(__dirname, "src/"),
    port: 3000,
    devMiddleware: {
      publicPath: "http://localhost:3000/dist/",
    },
    // publicPath: "http://localhost:3000/dist/",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
