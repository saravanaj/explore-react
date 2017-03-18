var webpack = require("webpack");

module.exports = {
    devtool: "source-map",
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    entry: {
        app: "./src/main.tsx",
        vendor: "./src/vendor.tsx",
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(["app", "vendor"])
    ],
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.html$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]'
                }
            }
        ]
    }
}