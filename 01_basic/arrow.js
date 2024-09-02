const user = {
    username : "fatymah",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to the website`);
        console.log(this);
        
        
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);
