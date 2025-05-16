// Basic example

function construct(Username, uid){
    this.Username = Username;
    this.uid = uid;
}

const obj1 = new construct('Niharika', '2400');
console.log(typeof obj1);
console.log(obj1);
console.log(obj1['Username'])
// let {Username, uid} = obj1;
// console.log(Username);



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
// Use prototype for method sharing so that 

// function Animal(fName){
//     this.fName = fName;
// }
// Animal.prototype.greet = function(){
//     console.log(`Heyyy ${this.fName}`)
// }
// const animal = Animal('Dog');
// // console.log(animal.fName);
// console.log(fName);
// console.log(animal);
// // animal.greet();
// const myAn =  new Animal('cat');
// console.log(myAn.fName);
// console.log(fName);
// myAn.greet();


// use ES6 classes for constructor

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