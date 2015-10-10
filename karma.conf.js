// Karma configuration

module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      { pattern: 'test/specs.webpack.js', watched: true },
      // { pattern: 'src/**/*.js', watched: true },
      { pattern: './node_modules/babel-core/browser-polyfill.js', watched: false }
    ],

    exclude: [],

    preprocessors: {
      'test/specs.webpack.js': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-source-map',
      watch: true,
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /(bower_components|node_modules)/,
            loader: 'babel-loader'
          }
        ]
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    plugins: [
      require("karma-webpack"),
      'karma-jasmine',
      'karma-phantomjs-launcher',
      // 'karma-chrome-launcher',
      'karma-sourcemap-loader'
    ],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: [
      // 'Chrome',
      'PhantomJS'
    ],

    singleRun: false
  })
}
