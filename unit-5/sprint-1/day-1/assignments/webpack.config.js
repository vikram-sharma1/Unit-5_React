const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'main.js',
  },
  mode:"development",
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader','css-loader' ]},
      {
        test: /\.(png|jpe?g|gif|jpeg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};