const { readFileSync, writeFileSync, read } = require('fs')

console.log("Starting function here")

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first)
console.log(second)

writeFileSync(
    './content/result-sync.txt',
    `This is text three!! also other results include: ${first}`,
    { flag: 'a'}
)

console.log("Start next task")