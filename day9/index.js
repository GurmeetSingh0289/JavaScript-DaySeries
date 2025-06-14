//find()method............................................
let arr=[2,5,4,7];
let res=arr.find((a)=> a ===5);
console.log(res);
//findIndex()method.......................................
let res1=arr.findIndex((a)=> a ===5);
console.log(res1);
//includes()method........................................
let arr1=[4,5,8,7,9,55];
let res2=arr1.includes(55);
let res3=arr1.includes(99);
console.log(res2);
console.log(res3);
//reverse() method........................................
let res4=arr1.reverse();
console.log(res4);
console.log(arr1);
let res5=arr1.splice(2,5,20);
console.log(arr1);
//unshift()method..........................................
let res6=arr1.unshift(87);
let res7=arr1.toString();
console.log(res7);
console.log(arr1);
let res8=arr1.sort();
console.log(res8);
//join()method..............................................
let res9=arr1.join(0);
console.log(res9);
// concat()method...........................................
let res10=arr1.concat(77,88,99);
console.log(res10);