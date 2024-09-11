const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin}=require("clean-webpack-plugin")
module.exports = {
  // 入口
  // 相对路径和绝对路径都行
  entry: "./mapboxgl/index.ts",
  //输出
  output: {
    // path:文件输出目录必须市绝对路径
    // path.resolve()方法返回一个绝对路径
    path: path.resolve(__dirname, "dist"),
    // filename：输出文件名
    filename: "index.js",
  },
  // 模式
  mode: "development",
  // devtool: "inline-source-map", // 开发模式下启用源代码映射
  resolve: { extensions: [".ts", ".js"] },
  // 加载器
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          // {
          //   loader: "babel-loader",
          // },
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,

        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              // 如果需要CSS Modules，请设置modules为true或相应的配置对象
              modules: false, // 这里假设您不需要CSS Modules
              importLoaders: 1, // 因为只有一个less-loader在css-loader之前
            },
          },
          {
            loader: "less-loader", // 注意这里去掉了require.resolve，因为webpack会自动解析loader
          },
        ],
      },
    ],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.resolve(__dirname, "mapboxgl/index.html"), // 假设您有一个HTML模板文件在src目录下
  //   }),
  // ],
};
