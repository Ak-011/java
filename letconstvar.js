
/*var a = 10;
a = 11;
a++;
console.log(a)*/


/*var a= 10; 
a++;
console.log(a)

let b =20;
b++;
console.log(b);

const c =30;
c++;
console.log(c)*/

/*
const obj = {
    k1: 'asd',
    k2: 10, 
    k3: false
};

obj.k4 =123
console.log(obj.k4);

delete obj.k1;
console.log(obj.k1)

const arr = [1,2,3]

arr.push(5);
console.log(arr);
*/

/*var myVar = 10;
function alpha(){
    var myVar = 11;
    if(true){
        myVar=21;
        console.log(myVar);
    }
    console.log(myVar);
}

let myVar = 10;
function alpha(){
    let myVar = 11;
    if(true){
        let myVar=21;
        console.log(myVar);
    }
    console.log(myVar);
}
alpha();
*/
const myVar = 10;
function alpha(){
    const myVar = 11;
    if(true){

        const myVar=21;
        if(true){
            const myVar =33;
            console.log(myVar)
        }
        console.log(myVar);
    }
    console.log(myVar);
}

alpha();
