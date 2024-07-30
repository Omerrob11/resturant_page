const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
     watchFiles: ['./src/index.html'],
    open: {
        app: {
          name: 'Google Chrome'
        }
      }
  },
//   module: {
//     rules: [
//         {
//             test: /\.(png|svg|jpg|jpeg|gif)$/i,
//             type: 'asset/resource',
//         }
//     ]
//   },
module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // Output path for images
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })]
};

