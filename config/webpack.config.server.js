const path = require('path');
process.env.NODE_ENV = 'production';

module.exports = {
  entry: './server.js',
  target: 'node',
  resolve: {
    root: path.join(__dirname, 'src'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, './build'),
    filename: './server/js/bundle-server.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(jpe?g|png|gif|svg|pdf)$/i,
        include: '/\/node_modules\//',
        loader: 'file?name=[1].[ext]&regExp=node_modules/(.*)'
      },
      {
        test: /\.(jpe?g|png|gif|svg|pdf)$/i,
        exclude: '/\/node_modules\//',
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    ]
  },
  node: {
    console: 'true',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
