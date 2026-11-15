var a=10;
var b=20;
var add=a+b;
console.log("Addition of a and b is: " + add);
var sub=a-b;
console.log("Subtraction of a and b is: " + sub);
var mul=a*b;
console.log("Multiplication of a and b is: " + mul);
var div=a/b;
console.log("Division of a and b is: " + div);
var mod=a%b;
console.log("Modulus of a and b is: " + mod);


//relational operators
var x=5;
var y=3;
console.log(x==y);
console.log(x!=y);
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);


//ternary operator
var age=18;
var result=age>=18 ? "You are eligible for voting" : "You are not eligible for voting";
console.log(result);

//positive, negative, or zero
var a=10;
if(a>0){
    console.log("a is positive");
}
else if(a<0){
    console.log("a is negative");
}
else{
    console.log("a is zero");
}


//even or odd
var num=7;
if(num%2==0){
    console.log(num + " is even");
}
else{
    console.log(num + " is odd");
}

//palindrome
var str="madam";
var reversedStr=str.split("").reverse().join("");
if(str==reversedStr){
    console.log(str + " is palindrome");
}
else{
    console.log(str + " is not palindrome");
}


//factorial
var num=5;
var factorial=1;
for(var i=1;i<=num;i++){
    factorial*=i;
}
console.log("Factorial of " + num + " is: " + factorial);

//logical operators
var a=true;
var b=false;
console.log(a && b);
console.log(a || b);
console.log(!a);
console.log(!b);
console.log(a && !b);

//boolean
let isStudent=true;
let isLoggedIn=false;
console.log(isStudent);
console.log(isLoggedIn);

//bitwise operators
let bitA=5;
let bitB=3;
console.log(bitA & bitB);
console.log(bitA | bitB);
console.log(bitA ^ bitB);
console.log(~bitA);
console.log(bitA << 1);
console.log(bitA >> 1);
console.log(bitA >>> 1);


//unary operators
var a=10;
console.log(a++);
console.log(a);
console.log(++a);
console.log(a--);
console.log(a);
console.log(--a);
console.log(a+=5);
console.log(a++ - ++a + a--);


