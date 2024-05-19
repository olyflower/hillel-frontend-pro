const path = require("path");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const useLoaders = require("./build/useLoaders");
const usePlugins = require("./build/usePlugins");

module.exports = (env) => {
	const mode = env.NODE_ENV;
	const devServer = { port: 4000, open: true };

	return {
		mode,
		entry: {
			app: path.resolve(__dirname, "src", "app.js"),
			appTs: path.resolve(__dirname, "src", "app2.ts"),
			"react-app": path.resolve(__dirname, "src", "react.jsx"),
		},
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "./js/[name].[contenthash].bundle.js",
			clean: true,
		},
		plugins: usePlugins(env),
		module: {
			rules: useLoaders(env),
		},

		optimization:
			mode === "production"
				? {
						minimizer: [`...`, new CssMinimizerPlugin()],
				  }
				: undefined,

		devServer,
	};
};
