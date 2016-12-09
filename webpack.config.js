var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');  // 引入一个第三方插件,用于生成 入口HTML文件
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 用于将css提取到单独的CSS文件

// webpack配置文件，export一个配置对象
module.exports = {
    entry: path.join(__dirname, './js/main'), // 入口文件
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
    module: {
        // 前置加载器
        preLoaders: [{
            test: /\.(js|jsx)$/,
            loader: 'eslint' // eslint-loader 会自动找当前目录下的.eslintrc 和 .eslintignore 作为配置
        }],
        // 路径处理配置
        resolve: {
            // 以什么样的后缀名 来识别模块
            extensions: ['', '.coffee', '.js', '.jsx']
        },
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css']   // 从右往左处理
            },
            {
                test: /\.less$/,
                // 使用这个插件，使得所有less 能被打入一个文件，并被引用。CSS 资源也可以做类似处理
                loader: ExtractTextPlugin.extract('css!postcss!less')
            }, {
                test: /\.(js|jsx)$/,
                // 排除目标
                exclude: /(node_modules)/,
                loaders: ['babel'] // babel-loader会自动找当前目录下的.babelrc作为配置
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',  // 要生成的文件名
            title: 'hong',           // <title>的内容
            hash: true   // 给引用的文件的地方添加hash
        }),
        new ExtractTextPlugin('[name].css', {   // 目标CSS文件的文件名，[name]表示入口文件的文件名；这个参数也可以写成固定的名称,例如：index.css
            allChunks: true
        })
    ]
};