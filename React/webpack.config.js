var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '../PublicSite/wwwroot');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
   module : {
        loaders : [
        {
            test : /\.jsx?/,
            include : APP_DIR,
            loader : 'babel-loader'
        }, 
        { 
          test: /\.css$/, 
          loader: "style-loader!css-loader" 
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        },
        {
            test: /\.(png|jpg)$/,
            loader: 'file-loader?name=images/[name].[ext]'
        },
        {
            test: /\.(mp4|MP4)$/,
            loader: 'file-loader?name=videos/[name].[ext]'
        },
        {
        test: /\.md$/,
        use: 'raw-loader'
      }
    ]
  },

  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;