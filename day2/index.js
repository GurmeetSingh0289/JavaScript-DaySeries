/* Hoisting in js:   Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that you can use variables and functions before they are declared in the code.*/

a = "hello";
console.log(a);
var a; //global scope or function scope and only var can be ignore hoisting

/*    b="world";
  console.log(b);
    let b;              show error in case of let and const also    */

/* ..................operators.................
    1)Arithmetic operators
    2)Comparison opeartors
    3)Bitwise opeartors
    4)Increment ,Decrement operators
    5)Logical operators
    6)Ternary operators
    7)Comma operators    */

// 1) arithmetic operators examples
   let x = 45;
   let y = 40;
   console.log(x + y);
   console.log(x - y);
   console.log(x * y);
   console.log(x / y);
   console.log(x % y);

// 2) comparison opeators
   let p = 45;
   let q = 40;
   console.log(p == q);
   console.log(p === q); //third sign(=) checks the data type of variables
   console.log(p != q);
   console.log(p !== q); //if one condition is true then result will be true(special case)
   console.log(p <= q);
   console.log(p >= q);
   