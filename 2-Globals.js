// GLOBALS 
// these are objects that are available in ALL MODULES 

// __dirname - path to current directory 
// __filename - file name 
// require - fuction to used modules 
// module - infor about current module (file)
// process - info about env where the program is being executed 

console.log(__dirname)

setInterval(() => {
    console.log('hello world')
}, 1000 )