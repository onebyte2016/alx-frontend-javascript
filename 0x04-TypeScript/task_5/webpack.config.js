// webpack.config.js
const path = require('path');

module.exports = {
  entry: "./js/main.ts", // We'll fix this path in the next step
  mode: 'development',     // or 'production'
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
