const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const srcPath = path.resolve(__dirname)
module.exports = {
  mode: 'development',
  entry: [path.join(srcPath, 'index.js')],
  output: {
    path: path.resolve('./dist/'),
    filename: 'index.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$|\.jsx?$/,
        include: srcPath,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(srcPath, 'index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'require.js', to: 'require.js' },
      ],
    }),
  ],
}
