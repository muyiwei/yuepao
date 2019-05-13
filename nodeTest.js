const path = require("path")
console.log(__dirname)
console.log(path.resolve(__dirname,"name"))
console.log(path.posix.join(path.resolve(__dirname,"name"), "aa"))