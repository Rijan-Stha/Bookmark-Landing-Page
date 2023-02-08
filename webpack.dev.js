const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports =  merge(common,{
    mode:"development",
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: "[name].js",
        clean:true
    },
    devServer:{
        static:path.resolve(__dirname,'dist'),
        open:true,
        hot:true,
        compress:true,
        historyApiFallback:true,
        port:4000,
    },
});