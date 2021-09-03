const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const pack = require('./package.json')

const config = {
    target: 'web',
    entry: pack.entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `${pack.name}-${pack.version}.bundle.js`
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: pack.title,
            filename: 'index.html'
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|js|jsx|tsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    babelrc: false,
                    presets: [
                        [
                            '@babel/env',
                            {
                                targets: {
                                    edge: '17',
                                    firefox: '60',
                                    chrome: '67',
                                    safari: '11.1'
                                },
                                useBuiltIns: 'usage',
                                corejs: '3.6.5'
                            }
                        ],
                        '@babel/preset-react',
                        '@babel/typescript'
                    ],
                    plugins: ['react-hot-loader/babel']
                }
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      query: {
                        name:'assets/[name].[ext]'
                      }
                    }
                  },
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      query: {
                        mozjpeg: {
                          progressive: true,
                        },
                        gifsicle: {
                          interlaced: true,
                        },
                        optipng: {
                          optimizationLevel: 7,
                        }
                      }
                    }
                  }]
              }
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 8084
    }
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map'
    }

    return config
}
