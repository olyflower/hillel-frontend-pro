const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
	return [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../public/index.html"),
		}),
		new webpack.EnvironmentPlugin({
			NODE_ENV: env.NODE_ENV,
		}),

		new MiniCssExtractPlugin({
			filename: "./css/[name].[contenthash].css",
		}),
	];
};
