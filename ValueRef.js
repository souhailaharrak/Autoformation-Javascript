//by values & by Reference

//value
//  let  x=5;
//  let  y=x;
//   y=10;
//  console.log(y)


// object 
let x={
    name:"Souhaila"
}
let y=x;
 y.name="harrak"
console.log(x)
console.log(y)


//In JavaScript, primitive data types (such as numbers, booleans, and strings) are passed by value. This means that when you pass a primitive value to a function or assign it to a new variable, the value is copied
 //and the new variable or function parameter is separate from the original value.                            