const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  // This 'devServer' stuff isn't really needed for the purposes of this application
  // But did it anyways as an opportunity to solidify understanding of this config for communicating between front-end to back-end
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    compress: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, './build'),
      publicPath: '/'
    },
    proxy: {
      '/api': 'http://localhost:3000'
    },
  },
  module: {
    rules: [
      {
        // Testing for any .js/.jsx files to be transpiled by Babel 'preset-react', and to transpile down
        // any ES6+ code down to version that can be compatible with any browser by Babel 'preset-env'
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', 
              `@babel/preset-react`
            ],
          },
        },
      },
      {
        // Testing for any .css/.scss files so that webpack can fulfill the style import in 'index.js'
        test: /\.s[ac]ss$/i,
        exclude: /(node_modules)/,
        use: [
          'style-loader', 
          'css-loader', 
          'sass-loader'
        ],
      },
    ],
  },
  plugins: [
    // Generates an HTML file based on the template we pass in to serve our webpack files
    // which in this case, the template is our own 'index.html' file
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './client/index.html'
    }),
  ],
  resolve: {
    // Enable importing .js and .jsx files without specifying their extension
    extensions: [
      '.js',
      '.jsx'
    ],
  },
};