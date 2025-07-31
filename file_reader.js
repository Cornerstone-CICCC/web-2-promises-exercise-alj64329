const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
fs.readFile('./firstname.txt','utf-8').then(firstFile =>{
   firstname = firstFile
   return fs.readFile('./lastname.txt', 'utf-8')
}).then(secondFile =>{
    lastname = secondFile
    return fs.readFile('./age.txt','utf-8')
}).then(thirdFile =>{
    age = thirdFile
    return fs.readFile('./hobbies.txt', 'utf-8')
}).then(finalFile =>{
    hobbies = JSON.parse(finalFile)
    console.log(`${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`)
}).catch(err =>{
    console.log(err)
})


// ASYNC/AWAIT SOLUTION BELOW THIS LINE

async function fileReader(){
    const firstname = await fs.readFile('./firstname.txt','utf-8')
    const lastname = await fs.readFile('./lastname.txt','utf-8')
    const age = await fs.readFile('./age.txt','utf-8')
    const hobbies = JSON.parse(await fs.readFile('./hobbies.txt','utf-8'))

    console.log(`${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`)
}

fileReader()