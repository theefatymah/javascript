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

const myNewArray2 = arr.splice(1, 3)
console.log(myNewArray2)
console.log('C', arr)

const marvelHeros = ['thor','ironman','spiderman']
const herosDc = ['supeman','flash','batman']
marvelHeros.push(herosDc)
console.log(marvelHeros);
console.log(marvelHeros[3][1]);

const allHeros = marvelHeros.concat(herosDc)
console.log(allHeros);

const spreadHeros = [...marvelHeros, ...herosDc]
console.log(spreadHeros);

const newArray2 = [1,2,3,[4,5,6],7,[9,10,[4,5]]]
const usableArray = newArray2.flat(Infinity)
console.log(usableArray);

console.log(Array.isArray('Fatymah'));
console.log(Array.from('Fatymah'));
console.log(Array.from({ name : 'Fatymah'}));//important

let score = 100
let score2 = 200
let score3 = 400

console.log(Array.of(score, score2, score3));

