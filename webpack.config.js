var webpack = require("webpack");
const path = require("path");
const rm = require('rimraf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var option={
 entry:{
 index:__dirname+"/src/main.js"
 }
,
output:{
	filename:"[name].js",
	path:__dirname+"/dist1"
},
module:{
	rules:[
      
      {
        test: /\.js$/,
       loader: 'babel-loader',
         include:[path.resolve(__dirname,"src")]
       },
      {
      	test:/\.css$/,
include:[path.resolve(__dirname,"src")],
      	use:ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })

      }

	]
}
,
// devServer: {
// 		inline: true,
// 		historyApiFallback: true,
// 		port: 80,
// 		contentBase: "./dist"
// 	},
	plugins:[ 
  new ExtractTextPlugin("styles.css"),

// new OptimizeCSSPlugin({
//       cssProcessorOptions: 
//         { safe: true, map: { inline: false } }
        
//     }),
  ]

}
rm(path.resolve(__dirname,"dist1"),function(){
	webpack(option,function(error,state){
    console.log(error)
	console.log(state.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }))

});
})

module.exports = option;