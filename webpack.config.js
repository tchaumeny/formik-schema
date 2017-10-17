const path = require('path');
const webpack = require('webpack');

const commonConfig = {
  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
  ]
};

module.exports = [
  {
    entry: './src/index',
    output: {
      path: path.resolve(__dirname, 'lib'),
      filename: 'formik-schema.js',
      library: 'formikSchema',
      libraryTarget: 'umd'
    },

    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  },
  {
    entry: './demo/form',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'demo.js'
    }
  }
].map((conf) => Object.assign(conf, commonConfig));
