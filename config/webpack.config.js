const paths = require('./paths');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [paths.src + '/main.js'],

    output: {
        path: paths.build,
        filename: 'main.bundle.js'
    },
    devServer: {
        open: true,
    },

    module: {
        rules: [{
                test: /\.txt$/,
                use: 'raw-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[contenthash:6].[ext]',
                        outputPath: 'images',
                    }

                }, ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '',
            template: 'src/template/index.html'
        })
    ]
}