// Modules

const names = require('./4-names')
const sayHi = require('./5-utils')
const dataFromFile6 = require('./6-alternative-flavor')

//When a module is called where a function is already invoked then 
//the function is RUN right away when called upon with require()
require('./7-mind-grenade')

//console.log(dataFromFile6.singlePerson.job)

// sayHi("Paul");
// sayHi(names.john)
// sayHi(names.peter)