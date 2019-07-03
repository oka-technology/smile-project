import * as path from 'path';
import { Configuration } from 'webpack';

const src  = path.resolve(__dirname, 'src/tsx');
const dist = path.resolve(__dirname, 'dist');

export default (): Configuration => ({
  mode: 'development',
  entry: src + '/index.tsx',

  output: {
    path: dist + '/js',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: [
          'ts-loader',
        ],
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../',
            },
          },
          'extract-loader',
          'html-loader',
        ],
      },
      {
        test: /\.css$/i,
        loaders: ['style-loader', 'css-loader?modules'],
      }
    ],
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },

  plugins: []
});
