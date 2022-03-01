/*
var intervalId ;
var runCount = 0;

function sayHello(){
    runCount++;
    if(runCount>5){
        clearInterval(intervalId);
    }

    console.log("hello!!!")
}
console.log("And the way starts . ..  ");
var intervalId  = setInterval(sayHello, 1000);
//clearInterval(intervalId);
*/
var myfun = function(){
    console.log("This run after 1 sec")
}
setInterval(myfun, 1000);
