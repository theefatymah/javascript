let today = new Date()
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toLocaleString());

console.log(typeof today);

let myCreatedDate = new Date('2023','05','09')
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let yesterday = new Date ('2003','06','09','11','09')
console.log(yesterday.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));





