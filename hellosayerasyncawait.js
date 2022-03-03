function helloSayer(times, name){
    return new Promise((resolve, reject) =>{
        let count = 0 
        let loopId = setInterval(() =>{
            count++
            console.log('Hello '+ name)
            if(count == times){
                clearInterval(loopId)
                resolve()
            }
        },100)

    })


}
/*async function task() {
 await   helloSayer(3, 'ritik')
  await  helloSayer(4,'devansh')
 await   helloSayer(2,'ashish')
}
*/
async function task(){
    await Promise.all([
        helloSayer(4, 'ashish'),
        helloSayer(3, 'ritik'),
        helloSayer(4, 'ram')
    ])

    console.log("----here im------")
     await Promise.all([
         
    helloSayer(3, 'shyam'),
    helloSayer(5, 'mohan'),
    helloSayer(2, 'seeta')
     ])

}
task()


module.exports = {
    helloSayer
}

