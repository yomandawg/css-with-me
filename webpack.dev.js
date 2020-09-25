const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

/**@type {import('webpack').Configuration} */
module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets/'),
      components: path.resolve(__dirname, 'src/components/'),
      data: path.resolve(__dirname, 'src/data/'),
      pages: path.resolve(__dirname, 'src/pages/'),
    },
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    port: 9000,
    watchOptions: {
      index: 'index.html',
      poll: 1000,
      watchContentBase: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['transform-class-properties'],
          },
        },
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src/'),
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        include: path.resolve(__dirname, 'src/assets/'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images/',
          },
        },
      },
      {
        test: /\.(woff2|woff|tff)$/,
        include: path.resolve(__dirname, 'src/assets/'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts/',
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/templates/index-template.js',
      title: 'index page',
      meta: { description: 'index page' },
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
