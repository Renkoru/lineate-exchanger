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
