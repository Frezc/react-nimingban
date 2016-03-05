var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080',
		APP_DIR + '/index.js'
	],

	output: {
		publicPath: "http://localhost:8080/build",
		path: BUILD_DIR,
		filename: 'bundle.js'
	},

	module: {
		loaders: [{
			test: /\.jsx?/,
			include: APP_DIR,
			loader: 'babel'
		},{
			test: /\.js?/,
			include: APP_DIR,
			loader: 'babel'
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}]
	},

	plugins: [
		/** enable in production
		new webpack.DefinePlugin({
		  "process.env": {
		    NODE_ENV: JSON.stringify("production")
		  }
		})
		*/
	]
}