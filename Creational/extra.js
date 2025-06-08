// class construct{
//     static uid;
//     static constant(hey){
//             console.log(hey);
//     }
//     constructor(myName){
//         this.myName = myName;
//     }
// }
// construct.constant('say hi')


// let fn = function sum(myName){
//    console.log('jey', myName);
// }

// fn('name');
// console.log(typeof fn)
// console.log(fn)



function closure(){
    let res =0;
    return function sum(){
        return res++;
    }
}
const myFunc = closure();
console.log(myFunc());
console.log(myFunc());




// let nums = [1,2,3,4]
// let init = 0;
// let fn = function sum(accum, curr) { return accum + curr; }
// var reduce = function(nums, fn, init) {
//    console.log(fn(init, ...nums))

// };
// reduce(nums,fn,init);

// var checkIfInstanceOf = function(obj, classFunction) {
//     // console.log(obj.constructor === classFunction)
// //     // console.log(Object.prototype.toString.call(obj).slice(8,-1) === classFunction)
// //     if (obj == null || (typeof obj !== 'object' && typeof obj !== 'function')) {
// //     return false;
// //   }
// while(obj!=null)
//     {
//         if(obj.constructor === classFunction)
//         {
//             return true;
//         }

//         console.log(obj);
//         console.log(classFunction);
//         obj = Object.getPrototypeOf(obj);

//     }
//     return false;
   
// };

// console.log( checkIfInstanceOf(5, Number))
// console.log( checkIfInstanceOf(null, null))
// console.log( checkIfInstanceOf(new Date(), Date))
// class Animal {}; class Dog extends Animal {}; 
// console.log( checkIfInstanceOf(new Dog(), Animal));