// blueprint for the way webpack should behave within our project. 
// We will give it paths to our code and to where we would like it to output builds
const path = require("path");
const webpack = require("webpack");


module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
      },
      plugins:[
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
      ],
      mode: 'development'
};
