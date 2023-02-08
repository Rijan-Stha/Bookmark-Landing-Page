const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development",
    entry:{
        index:'./src/index.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            title:"BookMark Landing Page",
            template: "./src/template.html"
        })
    ],
    devtool:'inline-source-map',
    devServer:{
        static:path.resolve(__dirname,'dist'),
        open:true,
        hot:true,
        compress:true,
        historyApiFallback:true,
        port:4000,
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg)$/i,
                type:'asset/resource'
            },
            {
                test:/\.(html|htm)$/i,
                use:["html-loader"],
            }
        ]
    }
}