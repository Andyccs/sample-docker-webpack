var path = require('path');

var contextPath = path.resolve(__dirname, 'src');
var buildPath = path.resolve(__dirname, 'public', 'build');

module.exports = {
  context: contextPath,
  entry: {
    javascript: './index.js',
    html: './index.html'
  },
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
    }, {
      test: /\.html$/,
      loader: 'file?name=[name].[ext]',
    }], 
  }
}
