// function sum(a){
//     return function ( b) {
//         if(!b) return a;
//         else return sum(a+b);
//     }
// }
// console.log(sum(4)(5)())



// db.sales.aggregate([
//     {$match : {item: "apple"}},
//     {
//     $group:{
//         _id: "$item",
//         totalQuantity: {$sum : "$quantity"}
//     }
// }
// ])



