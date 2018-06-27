const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  watch: true,
  module: {
    rules: [
			{
				test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
			},
			{
				test: /\.(woff2?|ttf|eot|jpe?g|png|gif|svg)$/,
        exclude: [
          path.resolve(__dirname, "src/assets/")
        ],
				loader: 'url-loader'
			},
      {
        test: /\.(|jpe?g|png|gif|svg)$/,
        include: [
          path.resolve(__dirname, "src/assets/")
        ],
        loader: "file-loader?name=[name].[ext]&publicPath=public/assets/&outputPath=public/assets/"
      },
      {
        test: [/\.js$/, /\.jsx$/, /\.es6$/],
        exclude: [
          path.resolve(__dirname, "node_modules/")
        ],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
	plugins: [
		new MiniCssExtractPlugin({ filename: 'styles.css' }),
    new HtmlWebpackPlugin({
      template: 'index-template.ejs',
      title: '{{ name }}',
      appId: 'app',
      appDescription: '',
      hash: true
    })
	],
  devServer: {
		contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    proxy: {
      '/api': {
        pathRewrite: {'^/api' : ''},
        target: 'http://localhost:3000',
        secure: false
      }
    }
  },
	devtool: "cheap-eval-source-map"
}

