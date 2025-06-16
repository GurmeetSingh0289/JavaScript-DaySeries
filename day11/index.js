// function in javascript
// regular function---
function fun(name,age){
    return console.log("regular function",name,age);
};
fun("gurmeet singh",22);
//arrow function
const a =()=>{
console.log("arrow function");
};
a();
//function expression
const b=function(){
  alert("function expression");
};
b();

// Question1;
function call(){
  console.log("hello.....brother");
}
call();
// Question2;
const p =()=>{
    console.log("Question2")
}
p();
// Question3:
function showDetails(firstName,lastName,age){
    return console.log(firstName,"",lastName,"is",age,"years old." );
}
showDetails("Mayank","Singh",20);
