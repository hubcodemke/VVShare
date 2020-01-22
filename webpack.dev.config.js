const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.cm\.styl$/,
        loader:
          "style-loader!css-loader?modules&camelCase&localIdentName=[local]-[hash:base64:5]!stylus-loader"
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "public/index.html"
    })
  ]
};
