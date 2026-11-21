//student details using to print 
var name="chinmai";
let age=22;
let course="java";
let fee=30000;
console.log(name,age,course,fee);

//2-functions
var a=10;
var b=20;
var add=a+b;
console.log("Addition of a and b is: " + add);


var subtract=function(a,b){
    return a-b;
}
var result=subtract(20,10);
console.log("Subtraction of a and b is: " + result);

var multiply=(a,b)=>a*b;
var result=multiply(20,10);
console.log("Multiplication of a and b is: " + result);

var divide=(a,b)=>a/b;
var result=divide(20,10);
console.log("Division of a and b is: " + result);

var add=(a,b)=>a+b;
var result=add(20,10);
console.log("Addition of a and b is: " + result);


//3-string methods in javascript
var str="Hello World";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(0,5));
console.log(str.replace("Hello","Hi"));
console.log(str.trim());
console.log(str.includes("Hello"));


//4-array methods in javascript
var arr=["chinmai","lavanya","pravallika","niharika","saritha","bhavya","srileka","chandana","kousalya","harini"];
console.log(arr);
console.log(arr.length);
console.log(arr.push("yasmin"));
console.log(arr.pop());
console.log(arr.shift());
console.log(arr.unshift("pravallika"));
console.log(arr.indexOf("niharika"));
console.log(arr.includes("lavanaya"));



//5-array of numbers 
var num=[10,20,35,30,40,45,50,60,70,80,90,100];
for(var i=0;i<num.length;i++){
    if(num[i]%2==0){
        console.log(num[i]);
    }
}
for(var i=0;i<num.length;i++){
    if(num[i]%2!=0){
        console.log(num[i]);
    }
}

for(var i=0;i<num.length;i++){
    if(num[i]>50){
        console.log(num[i]);
    }
}
var sum=0;
for(var i=0;i<num.length;i++){
    sum=sum+num[i];
}
console.log(sum);
console.log(Math.max(num));
console.log(Math.min(num));

console.log(num.sort());




//7-objects in javascript
var emp=[{id:1,name:"chinmai",dept:"IT",salary:50000,experience:2},
{id:2,name:"lavanya",dept:"AIML",salary:40000,experience:2},
{id:4,name:"niharika",dept:"DS",salary:80000,experience:1},
{id:5,name:"chandana",dept:"IT",salary:90000,experience:3},
{id:6,name:"kousalya",dept:"AIML",salary:100000,experience:2},];
console.log(emp);
for(var i=0;i<emp.length;i++){
    if(emp[i].salary>30000){
        console.log(emp[i]);
    }
}
for(var i=0;i<emp.length;i++){
    if(emp[i].dept=="IT"){
        console.log(emp[i]);
    }
}
for(var i=0;i<emp.length;i++){
    if(emp[i].experience>2){
        console.log(emp[i]);
    }
}
var max=0;
for(var i=0;i<emp.length;i++){
    if(emp[i].salary>max){
        max=emp[i].salary;
    }
}


//10-functions,arrays,objects,strings in javascript to print id,name,course,marks
var student=[{id:1,name:"chinmai",course:"MERN",marks:80},
{id:2,name:"lavanya",course:"java",marks:90},
{id:3,name:"niharika",course:"python",marks:70},
{id:4,name:"chandana",course:"ds",marks:60},];

student.push({id:5,name:"kousalya",course:"Mean",marks:50});
console.log(student);
for(var i=0;i<student.length;i++){
    
    
}



