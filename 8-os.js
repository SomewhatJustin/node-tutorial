const os = require("os")

// Info about current user
const user = os.userInfo()

// Method returns system uptime in seconds
console.log(`The system has been running for ${os.uptime() / 60} minutes`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)
