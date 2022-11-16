const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".ttf"],
  },
  output: {
    filename: "js/bundle.[hash].min.js",
    path: resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  context: resolve(__dirname, "../src"),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: ["file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]"],
      },
      {
        test: /\.ttf$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "../src/static/favicon.ico",
      template: "index.html",
    }),
  ],
};
