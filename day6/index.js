// loops in javascript
//for loop-----
const n=5;
for(let i=1;i<=n;i++){
    console.log('Hello World');
}
//for-in-loop-----(work in objects)
let obj={
    name:"gurmeet",
    age:22,
};
for(let key in obj){
    console.log(`${key}:${obj[key]}`);  
}
//while loop
let i=1;
while(i<=5){
    console.log("Jai Rajputana");
    i++;
}
//do-while loop
let p=1;
do{
    console.log('hey');
}
while(p<=0);
//Question to print a table of 3---
let A=parseInt(prompt("enter any number :"));
for(let i=1;i<=10;i++){
   console.log( +A +"*"+i+"="+A*i);
}
