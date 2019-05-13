var webpack = require("webpack");
const rm = require('rimraf')
const extractText=require("extract-text-webpack-plugin");
var option={
 entry:{
 index:__dirname+"/src/js/main.js"
 }
,
module:{
	rules:[{
		test:/\.css$/,
		use: extractText.extract({
          use: "css-loader"
        })
	}]
}
,
output:{
	filename:"[name].js",
	path:__dirname+"/dist1"
},
plugins:[new extractText("style.css")]
}
rm(__dirname+"/dist1",function(){
	webpack(option,function(error,states){
   console.log(states.toString())
})
})

module.exports = option;