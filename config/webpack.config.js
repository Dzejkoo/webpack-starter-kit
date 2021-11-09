const paths = require('./paths');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
    mode: 'development',

    entry: [paths.src + '/main.js'],

    output: {
        path: paths.build,
        filename: 'main.bundle.js'
    },
    devServer: {
        inline: true,
        open: true,
    },

    module: {
        rules: [{
                test: /\.txt$/,
                use: 'raw-loader',
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[contenthash:6].[ext]',
                        outputPath: 'src/images',
                    }

                }, ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '',
            template: 'src/index.html'
        }),
        new CopyPlugin({
            patterns: [{
                from: 'public/images',
                to: 'images'
            }]
        })
    ]
}