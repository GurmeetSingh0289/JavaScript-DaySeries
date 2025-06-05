// Question on switch case-------------------------------------
let marks=parseInt(prompt("enter your number out of 50="));
let grade;
switch(true){
    case marks>=0 && marks<=10:
    grade="E";
    break;
    case marks>=11 && marks<=20:
    grade="D";
    break;
    case marks>=21 && marks<=30:
    grade="C";
    break;
    case marks>=31 && marks<=40:
    grade="B";
    break;
    case marks>=41 && marks<=50:
    grade="A";
    break;
    default:
        grade="invalid";
        break;
}
console.log(grade);

