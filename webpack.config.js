const HtmlWebpackPlugin = require("html-webpack-plugin");

const BuildHashPlugin = require('build-hash-webpack-plugin');


const path = require("path");

module.exports = {
    entry: "./src/app.js", output: {
        path: path.resolve(__dirname, "dist"), filename: "bundle.js"
    }, module: {
        rules: [{
            test: /\.(png|jpe?g|gif)$/i, use: [{
                loader: 'file-loader',
            },],
        }, {
            test: /\.css$/, use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }]
        }]
    }, plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html", filename: "index.html"
    }),

        new BuildHashPlugin(),]
}