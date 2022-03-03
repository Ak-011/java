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
//concurrent
    helloSayer(4,'ashish')
        .then(helloSayer(2,'ritik'))
        .then(helloSayer(2,'aditya'))

//sequentially
  /*      helloSayer(4, 'Ashish')
        .then(()=>helloSayer(3,'aditya'))
        .then(()=>helloSayer(1,'ritik'))
  */   
    module.exports = {
        helloSayer
    }
