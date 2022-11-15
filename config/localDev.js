// development config
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("./common");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: [
    // 'react-hot-loader/patch', // activate HMR for React
    "webpack-dev-server/client?http://localhost:3000", // bundle the client for webpack-dev-server and connect to the provided endpoint
    "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
    "./index.tsx", // the entry point of our app
  ],
  devServer: {
    hot: true, // enable HMR on the server,
    port: 3000,
    host: "0.0.0.0",
    compress: true,
    stats: "minimal",
    inline: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    proxy: {
      "/api": "http://localhost:3003",
    },
    onListening: function (server) {
      const port = server.listeningApp.address().port;
      console.log("Listening on port:", port);
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "inline-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: "../tsconfig.json",
        memoryLimit: 8192,
      },
    }),
  ],
});
