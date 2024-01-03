// Modules - Encapsulated Code (Only share a minimum)
// CommonJs, every file is a module in node (by default)

const names = require('./4-names');
const sayHi = require('./5-utils')
const data = require('./6-alter-flavour')
require('./7-mind-grenade')

//  sayHi('Susan')
//  sayHi(names.john)
//  sayHi(names.peter)