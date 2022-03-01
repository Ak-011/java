/*
var a =10;
function print(){
    var a = 10;
    console.log(a)
}
console.log(a);

print();


function counter(val){
    return function plus(){
        console.log(++val);
    }
    return plus;
}
var c = counter(10);
c();
c();
*/

function createCounter(initVal , deltaVal){
    return{
        up(){
            initVal += deltaVal;
            console.log(initVal);
        },
        down(){
            initVal-=deltaVal;
            console.log(initVal);

        }
    }
}
var c = createCounter(10,2);
c.up()
c.up()
c.down()

c.down()





