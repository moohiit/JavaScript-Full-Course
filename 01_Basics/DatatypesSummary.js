//Primitive

//7 types: string , number , boolean, null, undefined, symbol, BigInt

const score = 100 //Dynamic type language
const scoreValue =100.3 //number 

const isloggedIn= false //boolean
const outsideTemp = null //null
let userEmail; //undefined

const Id = Symbol('123')
const anotherId = Symbol('123') //symbol

// console.log(Id===anotherId);
// console.log(Id==anotherId);

const bigInteger = 322323232323455455555555232n //BigInt
// console.log(typeof bigInteger)


//Reference (Non Primitive)
//Array, Objects, Functions
const heros = ["Akshay","Shahrukh", "Salman"] //Array
// console.log(typeof heros)

const myObj = {  //object
    name:"Mohit",
    agw: 22,
}
// console.log(typeof myObj)


const myFunction = function(){   //function
    console.log("Hello World");
}
// console.log(typeof myFunction)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive) Heap (Non Primitive)

let myyoutubename = "hiteshchaudharydotcom"

let anothername = myyoutubename
anothername = "chaiandcode"

console.log(myyoutubename)
console.log(anothername);

let userOne ={
    email:"user@gmail.com",
    upi:"user1@ybl"
}

let userTwo = userOne //reference to userOne is used.
userTwo.email="user2@gmail.com" //it will also update the userOne email

console.log(userOne.email)
console.log(userTwo.email)