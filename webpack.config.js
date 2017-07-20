'use strict';

// Modules
const webpack = require('webpack');
const helpers = require('./webpack/helpers');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = process.env.npm_lifecycle_event;
const isBuild = ENV === 'build';

module.exports = function () {
    const config = {
        context: helpers.root('./src'),
         //  项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
        entry: {
            'vendor': ['angular', 'angular-ui-router'],
            'app': './app.js'
        },
        //  输出的文件名 合并以后的js会命名为bundle.js
        output: {
            path: helpers.root(isBuild ? './dist' : './dist-dev'), // 打包好的资源存放的位置
            publicPath: '/',
            filename: isBuild ? 'resource/[name].[hash:8].js' : 'resource/[name].bundle.js',
            chunkFilename: isBuild ? 'resource/[name].[hash:8].js' : 'resource/[name].bundle.js'
        },
        externals: {
            jQuery: 'window.$'
        },
        // 要用什么不同的模块来处理各种类型的文件
        module: {
            preLoaders: [{ // 预加载
                // source-map会直接显示你出错代码的位置
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    helpers.root('node_modules/angular'),
                    helpers.root('node_modules/angular-ui-router')
                ]
            }],
            // 加载器配置
            // module.loaders是最关键的一块配置，它告知webpack每一种文件都需要使用说明加载器来处理
            loaders: [{
                test: /\.js$/,
                loaders: ['babel', 'eslint-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.scss$/,
                exclude: [helpers.root('./src/css/main.scss'), helpers.root('./src/app.scss')],
                loader: 'style!css!sass!postcss' 
            },
            {
                test: /\.scss$/,
                include: [helpers.root('./src/css/main.scss'), helpers.root('./src/app.scss')],
                loader: ExtractTextPlugin.extract('style', 'css!sass!postcss') 
            },
            {
                test: /\.html$/,
                loader: 'html?root=/&attrs=img:src img:data-src link:href'
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/i,
                loader: 'url?limit=8192?file&name=resource/images/[hash].[ext]'
            }]
        },
        //  添加我们的插件 会自动生成一个html文件
        plugins: [
            // 有选择性的提取（对象方式传参） 
            // 提取代码中的公共模块，然后将公共模块打包到独立的文件中，以便在其他入口和模块中使用（别忘了在html中引入抽离出来的公共模块）
            new webpack.optimize.CommonsChunkPlugin({
                name: 'commons.chunk', // 注意不要.js后缀
                chunks: ['app'] // 只在这些入口做
            }),
            // new webpack.optimize.CommonsChunkPlugin('vendor', isBuild ? 'vendor.[hash:8].js' : 'vendor.bundle.js'),
            // 默认会把所有入口节点的公共代码提取出来，npm run build的打包指令下，会生成一个resource/vendor.js，本地编译会生成一个resource/vendor.bundle.js
            new webpack.optimize.CommonsChunkPlugin('vendor', isBuild ? 'resource/vendor.js' : 'resource/vendor.bundle.js'),
            // 创建了HtmlWebpackPlugin的实例，生成页面
            new HtmlWebpackPlugin({
                template: helpers.root('./src/index.html'), // 模板文件路径
                //inject        : 'body',
                chunks: ['commons.chunk', 'vendor', 'app'], // 过滤块，允许只添加某些块
                chunksSortMode: 'dependency' // 允许控制块在添加到页面之前的排序方式，支持的值：'none' | 'default' | {function}-default:'auto'
            }),
            // 提取css样式，分离出独立的css文件，防止将样式打包在js中引起页面样式加载错乱的现象
            new ExtractTextPlugin(isBuild ? 'resource/[name].[hash:8].css' : 'resource/[name].css')
            // new webpack.ProvidePlugin({
            //     $: 'jquery',
            //     'window.jQuery': 'jquery'
            // })
        ],
        postcss: [
            autoprefixer({ // 处理css前缀问题
                browsers: ['last 2 version']
            })
        ],
        // webpack-dev-server是一个小型的Node.js Express服务器
        devServer: {
            contentBase: 'src',
            // 尽量减少输出
            //stats      : 'minimal',
            port: 8000
            // proxy: {
            //     '*': {
            //         target: 'http://192.168.0.133',
            //         // pathRewrite: {'^/h5_v3.0/common/*' : '/common/*'},
            //         secure: false,
            //         changeOrigin: true
            //     }
            // },
            // proxy: {
            //     '/common/': {
            //         target: 'http://www.tao.com/h5_v3.0/common/',
            //         pathRewrite: {'^/common' : ''},
            //         secure: false,
            //         changeOrigin: true
            //     }
            // }
        }
    };
    if (isBuild) {
        config.plugins.push(
            // 全局挂载插件
            new webpack.NoErrorsPlugin(), // 允许错误，不打断程序（跳过编译时出错的代码并记录，使编译后运行的包不会发生错误）
            new webpack.optimize.DedupePlugin(), // 有些js库有自己的依赖树，并且这些库可能有交叉的依赖，dedupePlugin可以找出他们并删除重复的依赖
            new webpack.optimize.UglifyJsPlugin() // 解析/压缩/美化所有的js
        );
    }
    if (isBuild) {
        //config.devtool = 'source-map';
    } else {
        config.devtool = 'source-map';
    }
    // 添加调试信息
    // config.debug = !isBuild || !isTest;
    config.debug = !isBuild;
    return config;
}();