const css = require("css");
const fs = require("fs");
const cssContent = fs.readFileSync("./cssAst.css","utf-8");
console.log(cssContent);
var cssAst = css.parse(cssContent);
debugger;
console.log(cssAst);