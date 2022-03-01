/*

function fakeDownload(done){
    setTimeout(function(){
        let downloadedData = "Some data has been downloaded"
        done(downloadedData)
    },1000)
}

fakeDownload(function(data){
    console.log("we downloaded the file which has data")
    console.log(data)
})
*/

function fakeDownloadPromise(correct){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            let downloadedData = " Some data has been downloaded"
            if(correct){
                resolve(downloadedData)
            }else{
                reject(new Error ("could not download file"))
            }
        
        },1000)
    })
}
let downloaded = fakeDownloadPromise(true);
downloaded.catch(function(err){
    console.log(err)
})

/*fakeDownloadPromise(false).then(function(data){
    console.log("The data that we downloaded --->")
    console.log(data)
}).catch(function(err){
    console.log(err)
})
*/
setTimeout(function(){
    downloaded.then(function(data){
        console.info("the data downloaded is this --->")
        console.info(data)
    })
},3000 )