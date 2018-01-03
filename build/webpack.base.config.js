module.exports = {
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(jsx|js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
