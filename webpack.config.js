const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.ts',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	mode: 'development',
	// stats: 'errors-only',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'assets'), // Carpeta de archivos estáticos
		},
		watchFiles: ['src/**/*', 'assets/**/*'], // Vigilar cambios en archivos estáticos
	},
	watchOptions: {
		poll: 1000,
		ignored: /node_modules/,
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: '/index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'assets', to: 'dist' }, // Copiar archivos estáticos a dist
			],
		}),
	],
};
