"use strict";

// Global context
console.log(this); // undefined in Node.js modules, window in browser scripts

// Regular function call
function showThis() {
  console.log(this);
}
showThis(); // undefined

// Method call (object context)
const obj = {
  method: function() {
    console.log(this);
  }
};
obj.method(); // Still refers to obj (unchanged by strict mode)

// Constructor
function Person() {
  console.log(this);
}
new Person(); // Still refers to the new instance (unchanged)