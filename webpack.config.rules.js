module.exports = function() {
  return [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test: /\.hbs/,
      use: 'handlebars-loader'
    },
    {
      test: /\.(jpe?g|png|gif|svg|)$/i,
      use: 'file-loader'
    }
  ];
};