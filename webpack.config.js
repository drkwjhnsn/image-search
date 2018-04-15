module.exports = {
  entry: __dirname + '/client/src/index.js',
  output: {
    path: __dirname + '/client/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: __dirname + '/client/src',
        use: ['babel-loader']
      }
    ]
  }
}
