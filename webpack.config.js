const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'app'),
    dist: path.join(__dirname, 'dist')
}

module.exports = {
    entry: {
        app: PATHS.app
    },

    output: {
        path: PATHS.dist,
        filename: 'bundle.js',
    },

    plugins: [
        new HtmlWebpackplugin   ({
            title: "Webpack Demo"
        })
    ]
}
