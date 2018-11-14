'use strict';
const { VueLoaderPlugin } = require('vue-loader');


module.exports = {
    mode: 'development',
    entry: [
        './frontend/app.js'
    ],
    output: {
        path: __dirname + "/frontend/dist",
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]_[hash:base64:8]'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
