// GLOBALS - NO WINDOW !!!!

// __dirname - path to current directory
// __filename - file name
// require - function to modules (CommonJs)
// module - info about current module (file)
// process - info about env where the code is being executed

console.log(__dirname)

setInterval(()=> {
  console.log('Hello world')
}, 1000)