const { readFile, writeFile, read } = require('fs')

console.log('start')

//READ first file
readFile('./content/first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result
    console.log(first)

    //READ second file
    readFile('./content/second.txt','utf8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result
        console.log(second)

        //WRITE a new file
        writeFile(
            './content/result-async.txt',
            "this is the ASYNC file",
            (err, result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log("This task is done")
            })
    })
})

console.log('starting next task')

