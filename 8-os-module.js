const { clear } = require('console')
const os = require('os')

// info about current user
const user = os.userInfo()
 
// method returns systems uptime in seconds

console.log(`The system uptime is ${os.uptime()} second`)

const currentOS = {
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem(),
}

console.log(currentOS)