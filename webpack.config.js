const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // entry port for created javascript files and bundle js file
  entry: path.resolve(__dirname, './src/javascript/index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },
  // set building options to development
  mode: 'development',
  // plugin to create bundle html file on dist folder
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/index.html'),
  })],
  // dev server setup
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 3000,
    hot: true,
    open: true,
    liveReload: true,
  },
  module: {
    rules: [
      {
        // rule for javascript transpiling
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
      // Now we apply rule for images
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
      },
      {
        // HTML LOADER
        test: /\.html$/,
        loader: 'html-loader',

      },
    ],
  },
};
