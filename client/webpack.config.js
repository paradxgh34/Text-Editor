const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');


// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
    // Webpack plugin 
    // TODO: Add and configure workbox plugins for a service worker and manifest file.
    HtmlWebpackPlugi({
      template: "./index.html",
      title: "Text Editor",
    })
      
      ],

      //Custom service worker

    module: {
      rules: [
        
      ],
    },
  };
};

//// TODO: Add CSS loaders and babel to webpack.


// Babel module load load
"@babel/plugin-proposal-object-rest-spread",
"@babel/transform-runtime",
],




// TODO: Add CSS loaders and babel to webpack.