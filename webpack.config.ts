import * as path from 'path';
import { Configuration } from 'webpack';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __DEV__: boolean = process.env.NODE_ENV !== 'production';
const sassFilePath:string = path.resolve(__dirname, 'src/sass/_global-imports.scss');

export default (): Configuration => ({
  mode: 'development',
  entry: path.resolve(__dirname, 'src/tsx/index.tsx'),

  output: {
    path: path.resolve(__dirname, 'dist'),
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
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: __DEV__ ? '[path]__[local]___[hash:base64:5]' : '[hash:base64:16]',
              },
              sourceMap: __DEV__,
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            options:{
              data: '@import "global-imports";',
              includePaths: [path.resolve(__dirname, 'src/sass/')],
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },

});
