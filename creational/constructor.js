// Basic example

function construct(Username, uid){
    this.Username = Username;
    this.uid = uid;
}

const obj1 = new construct('Niharika', '2400');
console.log(typeof obj1);
console.log(obj1);
console.log(obj1['Username'])
let {Username, uid} = obj1;
console.log(Username);



// Instanceof
// function constructIt(myName){
//     this.myName = myName;
// }
// const p = new constructIt('Ninaa');
// console.log(p instanceof constructIt);
// console.log(p)



// Real example: To do List

// function ToDo(title, description){
//     this.title = title;
//     this.description = description;
//     this.isCompleted = false;
//     this.markAsDone = function(){
//         this.isCompleted = true;
//     }
// }

// const task1 = new ToDo('DSA', 'Completed one dsa question');
// console.log(task1);
// console.log(task1.isCompleted);
// task1.markAsDone();
// console.log(task1.isCompleted);





// Interesting

// try to create an instance without new keyword
// Use prototype for method sharing so that each time extra method won't be created for no use


Animal.prototype.greet = function(){
    console.log(`Heyyy ${this.fName}`)
}


function Animal(fName){
    this.fName = fName;
}
const animal = Animal('Dog');
// console.log(animal.fName);
console.log(fName);
console.log(animal instanceof Animal)
console.log(animal);
// animal.greet();
const myAn =  new Animal('cat');
console.log(myAn.fName);
console.log(fName);
console.log(myAn instanceof Animal)
myAn.greet();




// use ES6 classes for constructor
// This is also memory efficient as method will be called when necessary

// class createObj{
//     constructor(myName){
//         this.myName = myName;
//     }
//     drive(){
//         console.log(`${this.myName} drives well`)
//     }
// }

// const classObj = new createObj('Mish');
// console.log(classObj);
// console.log(typeof classObj);
// classObj.drive();





// If you return object manually, it will overrise the implicit created by new

// function constructSomething(nName){
//     this.nName = nName;
//     return ({nName: 'Niharika'})
// }
// const obj1 = new constructSomething('Niha');
// console.log(obj1)
// console.log(obj1 instanceof constructSomething) // will it be instance of constructSomething???


