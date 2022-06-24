// Modules
// Every file in Node is a module by default

const names = require("./4-names")
const sayHi = require("./5-utils")
const someData = require("./6-alternative")

sayHi(names.me)

require("./7-joemama")
