// main.js 

const HashMap = require('./HashMap');

const test = new HashMap(); // or HashMap() if using a factory

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');


console.log(test.get('hat'));
console.log(test.has('chicken'));
console.log(test.remove('jacket'));
console.log(test.get('jacket'));
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
console.log(test.clear());
console.log(test.keys());