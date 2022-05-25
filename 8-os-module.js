const operatingSys = require('os')

//info about current user
const user = operatingSys.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${operatingSys.uptime()} seconds`)

const currentOs = {
    name: operatingSys.type(),
    release: operatingSys.release(),
    totalMemory: operatingSys.totalmem(),
    freeMemory: operatingSys.freemem()
}
console.log(currentOs)