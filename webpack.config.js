const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');

const config = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [

            // JavaScript Files
            {
            test: /\.js?$/,
            exclude: /node_modules/,
            use: ['babel-loader']
            },

            // CSS Files
            {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract(
                {
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
                })
            },

            // Image Files
            {
            test: /\.(gif|png|jpe?g|jpg|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                    },
                  },
                ],
            },

        ]
    },
    // Plugins
    plugins: [ 
        new ExtractTextPlugin({filename: 'style.css'}),

        // HTML
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),

        new CopyWebpackPlugin([
            { from: 'src/img', to: 'img' }
        ])
    ]
};

// Exports
module.exports = config;