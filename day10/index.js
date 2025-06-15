// Question1:
let arr=[0,1,1,1,0,0,0,1,1,0,1];
let count0=0,count1=0;
for(let i =0;i<arr.length;i++)
    {
      if( arr[i]===0){
        count0++;
      }
     else{
        count1++;
      }
    }
    console.log("number of zeros in given array is "+count0);
    console.log("number of ones in given array is "+count1);
//=======================================================================================
// Question2:
let arr1=[3,6,7,8,9,1,0]
// find odd and even 
let odd=[],even=[];
for(let i=0;i<arr1.length;i++)
{
    if(arr1[i]%2==0){
     even.push(arr1[i]);
    }
    else{
        odd.push(arr1[i]);
    }
}
console.log(odd, odd.length);
console.log(even, even.length);
// =========================================================================================
// Question3:
let arr2=[4,44,4,8,7,9,2,7,2]
let second=[];
for(let i=0;i<arr2.length;i++){
    for(let j=i+1;j<arr2.length;j++)
    {
    if(arr2[i]===arr2[j])
   second.push(arr2[i]);
}
}
console.log(second);





