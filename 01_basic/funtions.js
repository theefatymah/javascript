function sayMyName(){
    console.log("F");
    console.log("A");
    console.log("T");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("h");
}
sayMyName()

function addTwoNumbers(number1,number2){
    // console.log( number1 + number2);

    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3,4)
console.log("Result : " , result);


function loginUserMessage(username = 'user'){
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in `
}
console.log(loginUserMessage('Fatymah'));

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500));

const user = {
    username : 'fatymah',
    price : 199
}

function handleObject(anyObject){
    console.log(`username ${anyObject.username} have price of ${anyObject.price}`);
    
}
handleObject(user)

const myNewArray = [200,400,600]

function objectArray(array){
    return array[2]
}
console.log(objectArray(myNewArray));

