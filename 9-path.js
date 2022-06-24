const path = require("path")

console.log(path.sep)

const filePath = path.join("/content", "subfolder", "path.txt")

console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, "Content", "subfolder", "path.txt")
console.log(absolute)
