let a = 400;

if(true){
    let a = 20
    const c = 40
    console.log( "INSIDE let ", a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
console.log('outside let ', a);

function one(){
    const username = "Fatymah"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

 one()



 if (true){
    const username = "Fatymah"
    if(username === "Fatymah"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website);
 }
 //console.log(username);
 
console.log(addone(5));
 function addone(num) {
    return num + 1
 }
 


// console.log(addTwo (5));
const addTwo = funtion(num){
    return num +2
 }

addTwo(5)
