const path = require("path");

// html-webpack-plugin 是 webpack 中的 HTML 插件，可以通过此插件自定制 index.html 页面的内容。
// 导入插件，得到构造函数
const HtmlPlugin = require("html-webpack-plugin");
// 创建插件的示例对象
const htmlPlugin = new HtmlPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

// 为了在每次打包发布时自动清理掉 dist 目录中的旧文件，可以安装并配置 clean-webpack-plugin 插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const cleanPlugin = new CleanWebpackPlugin();

module.exports = {
  mode: "development", // development production

  // devtool: "eval-source-map", //eval-spurce-map 仅限在开发模式下使用
  // 生产环境下，建议关闭 SourceMap 或将 devtool 的值设置为 nosources-source-map
  // devtool: "nosources-source-map", //只定位报错的具体行数，且不暴露源码
  // devtool: "source-map",  //想在定位报错行数的同时，展示具体报错的源码

  // 指定打包入口
  entry: path.join(__dirname, "./src/index.js"),
  // 指定打包出口
  output: {
    // 表示输出文件的存放路径
    path: path.join(__dirname, "./dist"),
    // 表示输出文件的名称
    filename: "js/bundle.js", //明确告诉 webpack 把打包生成的js文件存放在 dist 目录下的js 子目录
  },
  plugins: [htmlPlugin, cleanPlugin], //挂载插件的实例对象
  devServer: {
    open: true, //初次打包完成后，自动打开浏览器
    host: "127.0.0.1", //实时打包所使用的主机地址
    port: 8999, //实时打包所使用的端口号
  },
  module: {
    //所有第三方文件模块的匹配规则
    rules: [
      //文件后缀名的匹配规则
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
      // { test: /\.jpg|png|gif$/, use: "url-loader?limit=22228" },
      {
        test: /\.jpg|png|gif$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 22228,
            esModule: false, //解决：关闭url-loader的es6模块化，使用commonjs解析
            // 指定打包生成的image文件存放在 dist 目录下的 image 字目录
            outputPath: "image",
          },
        },
        // webpack5的官网中url-loader，file-loader已经是弃用了的，如果还要使用这两个废弃了的文件的话，必须加上最后那一句type: ‘javascript/auto’,否则会出现一张图片打包两次，而且会出现背景图片不会显示到页面上的问题
        type: "javascript/auto",
        // type: "asset/resource",
      },
      {
        test: /\.js$/,
        // exclude表示排除项
        // 表示 babel-loader 只处理用户编写的js，不需要处理 node_modules 下的js
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
};
