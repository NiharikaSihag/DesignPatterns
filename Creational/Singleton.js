// simple singleton exmaple
class singleton{
    constructor(nam){
        if(singleton.instance){
            return singleton.instance;
        }
        this.data = 'Hye this is the instance';
        this.nam = nam;
        singleton.instance = this ;
        return this;
    }

}
const obj1 = new singleton('Niharika');
console.log(obj1)
// console.log(obj1.nam);
// const obj3 = new singleton('Neha');
// console.log(obj3)


// singelton with some key updations
// class Singleton2{
//     constructor(age){
//         if(Singleton2.instance){
//             return Singleton2.instance;
//         }
//         this.age = age;
//         Singleton2.instance = this;
//         return this;
//     }
//     setAge(age){
//         this.age = age;
//         return this;
//     }
// }
// const obj4 = new Singleton2(20);
// console.log(obj4);
// const obj5 = new Singleton2(40);
// console.log(obj5);
// obj5.setAge(50);
// console.log(obj5);


// using closures
// const Singleton3 = function() {
//     let instance;
//     function createInstance(age){
//         return {
//             age : age,
//             setAge: function(age){
//                 this.age = age;
//                 return this;
//             }
//         }
//     }

    
//     return {
//         getInstance: function(age){
//             if(!instance){
//                 instance = createInstance(age);
//             }
//             return instance;
//         }
//     }
// }();

// const obj8 = Singleton3.getInstance(40);
// console.log(obj8);
// const obj9 = Singleton3.getInstance(50);
// obj9.setAge(60);
// // obj9.setAge(50)
// console.log(obj9);
// console.log(obj8);


console.log([1,2,3]+2+3)
console.log({} + 1+2)