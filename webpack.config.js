var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ["./vehicle.js"],
    output: {path: __dirname,filename: "bundle.js"},
    devtool:"source-map",
    module: {
        loaders: [
            {test:/\.js$/, loader:"babel-loader", exclude:/node_modules/, query:{presets:['es2015'],cacheDirectory:false}}
        ]
    },
    debug:true,
    watch:false
};

