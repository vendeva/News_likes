const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  module: {
    rules: [
      {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",   // определяем загрузчик
            options:{
                presets:[ "@babel/preset-env", "@babel/preset-react"],
                plugins: [
                    [
                      "@babel/plugin-proposal-class-properties"
                    ]
                ]   
            }
       },
      {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};