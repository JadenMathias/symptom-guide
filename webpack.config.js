const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: "./src/index.tsx",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Covid Symptom Guide",
			meta: { viewport: "width=device-width, initial-scale=1" },
		}),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css?$/,
				use: ["style-loader", "css-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
					},
				],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".scss", ".css", ".png"],
	},
	watch: false,
	mode: "development",
};
