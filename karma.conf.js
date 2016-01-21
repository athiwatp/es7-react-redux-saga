module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    singleRun: true,
    frameworks: [ 'mocha' ],
    files: [
      'tests.webpack.js'
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-chai', 'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-coverage',
      'karma-mocha-reporter'
    ],
    preprocessors: {
      'tests.webpack.js': [
        'webpack',
        'sourcemap'
      ]
    },
    reporters: [
      'mocha',
      'coverage'
    ],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['react', 'es2015', 'stage-0']
            }
          }
        ],
        postLoaders: [ {
          test: /\.js$/,
          exclude: /(test|node_modules|bower_components)\/|.*\.test\.js/,
          loader: 'istanbul-instrumenter' } ]
      }
    },
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  })
}
