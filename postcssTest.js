const postcss = require("postcss");
const postcssTestPlugin = require("postcss-test-plugin");
const fs = require("fs");
const css = fs.readFileSync("./test.css","utf-8");

postcss([postcssTestPlugin]).process(css).then(function(result){
 
 console.log("complete");
})