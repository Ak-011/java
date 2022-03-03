//call back funtions are used to overcome the concurrency 


function helloSayer(times, name, doneSaying){
    let count = 0 
    let loopId = setInterval(() =>{ 
        count++
        console.log('Hello '+ name)
        if(count == times){
            clearInterval(loopId)
            doneSaying()
        }
    },100)
}

    helloSayer(4, 'Ashish', ()=>{
        helloSayer(2,'Aditya',()=>{
        helloSayer(3,'Renu',()=>{
            
        }) 
    })
    })
    module.exports = {
        helloSayer
    }
