const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const PATHS = {
    app: path.join(__dirname, 'app'),
    dist: path.join(__dirname, 'dist')
}
const productionConfig = () => commonConfig;
const developmentConfig = () => {
    const config = {
        devServer: {
            //Enable history fallback API
            historyApiFallback: true,
            // Display only errros to reduce the amount of output
                stats: 'errors-only',
            // parse host and env from env to allow customization
            host: process.env.host, //Defaults to `localhost`
            port: process.env.port, //Defatulst to 8080
            overlay: {
                errors: true,
                warnings: true
            }
        }
    }
    module: {
        rules: [
            {
                test:/\.js$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    emitWarning: true
                }
            }
        ]
    }
    return Object.assign(
        {},
        commonConfig,
        config
    )
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

//  if (env === 'production'){
//         return productionConfig();
//     }
//     return developmentConfig();