let arr=[2,4,5,6,7,8];
//map method==create a new array by applying a function to each element.
let res0=arr.map((a)=>a+4);
console.log(res0);
//filter method==The filter() method creates a new array with only the elements that pass a test (condition) you provide.
let res00=arr.filter((a)=>a<7);
console.log(res00);
console.log(arr);
console.log(arr.length);
// push always returns the length value and adds to end any push value.
let arr1=["arpit","4","pranjal"];
console.log(arr1);
let res=arr1.push("5");
console.log(res);
console.log(arr1);
//slice method=== slice(start, end)-Returns a part of the array.
let res2=arr1.slice(1,3);
console.log(res2);
//toString method ====The toString() method converts a value (usually an object or number) to a string. 
let res3=arr1.toString();
console.log(res3);
//shift method== removes the first element of an array.
let res4=arr1.shift();
console.log(res4);
//pop method== remove the element from the last of the array.
let res5=arr1.pop();
console.log(res5);


