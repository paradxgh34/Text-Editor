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


    // Webpack plugin 
    // TODO: Add and configure workbox plugins for a service worker and manifest file.

    plugins: [

    HtmlWebpackPlugi({
      template: "./index.html",
      title: "Text Editor",
    })
      
      ],

      //Custom service worker

    module: {
      rules: [
        test /\.m?js$/,
        use /node_modules/,
        
      ],
    },
  };
};

//// TODO: Add CSS loaders and babel to webpack.
rules: [
  {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  },

// Babel module load load
"@babel/plugin-proposal-object-rest-spread",
"@babel/transform-runtime",
],




// TODO: Add CSS loaders and babel to webpack.