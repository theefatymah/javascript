const name = "Fatymah"
const repoCount = 50 

// console.log( name + repoCount + " value");
console.log(`hello! My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Fatymah-mah-noor')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(5));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-7, 5)
console.log(newString);

const newStringOne = "        Fatymah         "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://theeFatymah%20dev"
console.log(url.replace('%20', '-'));
console.log(url.includes('mahnoor'));

console.log(gameName.split('-'));









