const webpack = require('webpack');
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production'; // 判断当前环境是开发环境还是 部署环境，主要是 mode属性的设置值。
module.exports = {
    entry: './data.js', // 入口文件
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true // 启用sourceMap有利于开发调试
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: loader => [
                                require('autoprefixer')({ browsers: ['> 0.15% in CN'] }) // 添加前缀
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ] // 编译处理顺序从下往上sass-loader加载sass文件 css-loader加载css文件，style-loader把css注入到html页面中
            },

            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query:{
                    presets:["env"]
                }             
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css', // 设置最终输出的文件名
            chunkFilename: '[id].css'
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true 
              }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }

}

