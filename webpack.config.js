var compileFiles = /\.js/;
var ignoredFolders = /node_modules/;

module.exports = {
  context: __dirname + '/src/scripts',
  entry: './app.js',

  output: {
    filename: 'app.js',
    path: __dirname + '/build'
  },

  devtool: 'source-map',

  eslint: {
    configFile: __dirname + '/.eslintrc'
  },

  module: {
    preLoaders: [
      {
        test: compileFiles,
        exclude: ignoredFolders,
        loaders: ['eslint-loader']
      }
    ],

    loaders: [
      {
        test: compileFiles,
        exclude: ignoredFolders,
        loaders: ['babel-loader']
      }
    ]
  }
};
