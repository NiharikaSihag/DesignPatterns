const obj2 = {
    nam1: 'Nonu',
    age: 21,
    address:{
        pincode: 123,
        line: 'one'
    }
}

const deepCopy = structuredClone(obj2) // JSON.parse(JSON.stringify(obj2))
deepCopy.nam1 = 'Nisha'
deepCopy.address.pincode = 7439223
console.log('obj2',obj2)
console.log('DeepCopy',deepCopy)

// const shallowCopy2 = {...obj2}
// shallowCopy2.nam1 = 'Niha'
// shallowCopy2.address.pincode = 456
// console.log('obj2',obj2)
// console.log('shallowcopy2',shallowCopy2)

// const shallowCopy1 = Object.assign({},obj2);
// shallowCopy1.nam1 = 'Niha'
// shallowCopy1.pincode = 456
// console.log('obj2',obj2)
// console.log('shallowcopy1',shallowCopy1)

// const obj3 = {
//     student: true,
//     __proto__: obj2
// }
// console.log(obj3.nam1)
// const obj4 = Object.create(obj2);

// obj4.nam1 = 'Niharika'
// obj4.pincode = 456782

// console.log('oobj4', obj4)
// console.log('oobj2', obj2)
// // console.log(obj4.nam1)
