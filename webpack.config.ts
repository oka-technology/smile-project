import * as path from 'path';
import { Configuration } from 'webpack';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';

const src  = path.resolve(__dirname, 'src/tsx');
const dist = path.resolve(__dirname, 'dist');

const __DEV__ = process.env.NODE_ENV !== 'production';

export default (): Configuration => ({
  mode: 'development',
  entry: src + '/index.tsx',

  output: {
    path: dist,
    filename: 'bundle.js'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],

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
            },
          },
          'extract-loader',
          'html-loader',
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: __DEV__ ? '[path]___[name]__[local]___[hash:base64:5]' : '[hash:base64:16]',
              },
              sourceMap: __DEV__,
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      }
    ],
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },

});
