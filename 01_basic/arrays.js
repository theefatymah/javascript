const arr = [0, 1, 2, 3, 4, 5]
const name = ['Fatymah','MahNoor']

const myArr = new Array(0, 1, 2, 3, 4, 5)
console.log(myArr[1]);

arr.push(6)
arr.push(8)
arr.pop()


arr.shift()
arr.unshift(9)
console.log(arr.includes(9));
console.log(arr.indexOf(3));

console.log(arr); 
const newArray = arr.join()
console.log(newArray);
//slice,splice
console.log('A', arr);
const myNewArray = arr.slice(1, 3)

console.log(myNewArray);
console.log('B', arr);


