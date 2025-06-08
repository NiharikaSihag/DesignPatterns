// function throttle(fn, delay){
//     let lastCall = 0;
//     return function(...args){
//         let now = new Date();
//         if(now-lastCall >= delay){
//             lastCall = now;
//             fn.apply(this, args);
//         }
//     }
// }




// function throttle (fn, delay){
//     let lastCall = 0;
//     return function (...args){
//         let now = new Date();
//         if(now - lastCall >= delay){
//             fn.apply(this, args);
//             lastCall = now;
//         }
//     }
// }