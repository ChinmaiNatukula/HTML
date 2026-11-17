//function welcome
function welcome(){
    console.log("Welcome to my website");
}
welcome();

let a=5;
let b=10;
let c=15;
if(a>b && a>c){
    console.log("a is greater than b and c");
}
else if(b>a && b>c){
    console.log("b is greater than a and c");
}
else{
    console.log("c is greater than a and b");
}

//square of a number
let square=n=>n*n;
console.log(square(5));


//smallest of two numbers
let smallest=(a,b)=>a<b?a:b;
console.log(smallest(5,10));
console.log(smallest(10,5));

//simple interest
let simpleInterest=(p,r,t)=>p*r*t/100;
console.log(simpleInterest(1000,5,2));

//multiplication table
for(let i=1;i<=10;i++){
    console.log(i*5);
}
//positive or negative
let posNeg=n=>n>0?"positive":n<0?"negative":"zero";
console.log(posNeg(5));
console.log(posNeg(-5));
console.log(posNeg(0));

