let a = 400;

if(true){
    let a = 20
    const c = 40
    console.log( "INSIDE let ", a);
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}
console.log('outside let ', a);

function one(){
    const username = "Fatymah"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);
    two()
}
 one()