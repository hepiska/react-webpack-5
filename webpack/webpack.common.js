const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');

const srcPath = path.resolve(__dirname, '../src');
const env = process.env.ENV_FILE ? process.env.ENV_FILE : './.env';

const commonConfig = {
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/',
    filename: 'js/bundle.js',
    chunkFilename: 'js/[fullhash]-[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        test: /\.(css|scss|sass|less)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.(bmp|gif|jpe?g|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'media/images/[ext]/[name].[ext]',
            esModule: false
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader?prefix=fonts/',
          options: {
            name: 'media/fonts/[name].[ext]',
            esModule: false
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.mjs'],
    modules: [srcPath, 'node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'loan BE',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV !== 'production'
    }),
    new Dotenv({ path: env, systemvars: true, expand: true })
  ]
};

module.exports = commonConfig;
