const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

const isDevServer = process.env.WEBPACK_SERVE
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },
  target: 'web',
  devtool: isProduction ? undefined : 'source-map',
  devServer: {
    port: 3000,
    // when navigating to a routed URL, serve the index page at `/index.html` and let react-router handle the routing.
    // used in conjunction with the `publicPath` set above
    historyApiFallback: true,
    liveReload: true,
    watchFiles: ['src/**']
  },
  optimization: {
    runtimeChunk: 'single',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
      fallback: {
        "fs": false,
        "path": require.resolve("path-browserify"),
        "crypto-browserify": require.resolve('crypto-browserify'),
        "os": require.resolve("os-browserify/browser")
    },
    alias: {
      '@DRXPath': path.resolve(__dirname, './src/'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'true',
      scriptLoading: 'defer'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new NodePolyfillPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }]
            ]
          }
        }
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
};