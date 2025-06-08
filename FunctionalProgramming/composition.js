function sum (a,b){
    return a+b;
}
function square(c){
    return c*c;
}
function cube(d){
    return d*d*d;
}
const compose = (f,g,c) => (...args) => f(g(c(...args)))
let squareSum = compose(cube,square, sum)
// console.log(square(sum(3,4)))
console.log(squareSum(1,2))


