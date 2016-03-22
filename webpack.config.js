var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'javascripts/main.js'),
	output: {
		path: './build',
		filename: '[name].js'
	},
	module: {
		loaders: [{
			test: /\.less$/,
			loader: 'style-loader!css-loader!less-loader'
		}, {
			test: /\.css/,
			loader: 'style!css'
		}]
	}
};