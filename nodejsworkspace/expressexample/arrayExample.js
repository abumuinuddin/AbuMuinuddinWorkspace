//Array.prototype.keys

var arr = ["a", "b", "c"];
var iterator = arr.keys();

// console.log(iterator.next()); // { value: 0, done: false }
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }

for (var key of arr.keys()) {
  console.log(key + ": " + arr[key]);
}


//Array.prototype.lastIndexOf()

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}

console.log(indices);
// [4, 2, 0]

//
var arrayBefore = [1, 4, 9, 16, 25, 2];
var arrayAfter = arrayBefore.map(Math.sqrt);


var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});

arrayBefore.forEach(function (value) {
  console.log(value);
});
console.log("-------------------------");

arrayAfter.forEach(function (value) {
  console.log(value);
});