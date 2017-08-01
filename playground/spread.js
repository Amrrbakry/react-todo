// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groubA = ['Jen', 'Cory'];
// var groubB = ['Vikram'];
// var final = [3, ...groubA];
//
// console.log(final);


var person = ['Andrew', 25];
var person2 = ['Amr', 22];

function greet(name, age) {
  return `Hi ${name}, your age: ${age}`
}

console.log(greet(...person2));
