const path = require('webpack')
const validate = require ('webpack-validator')

module.exports = validate({
    devtool : 'source-map',
    entry : './src/index.js',
    output : {
        path : __dirname + '/dist',
        filename : './bundle.js'
    },
    devServer : {
        port : 3000,
        contentBase : './dist'
    },
    module : {
        preLoaders :[{
            test : /\.js$/,
            exclude : /node_modules/,
            include : /src/, 
            loader : 'standard'
        }],
        loaders : [{
            test : /\.js$/,
            exclude : /node_modules/,
            include : /src/,
            loader :  'babel'
        }]
    }
})