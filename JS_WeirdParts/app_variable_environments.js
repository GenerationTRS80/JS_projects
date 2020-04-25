/* variable environments 
  1) Phase 1 - Create memory for the variables
  2) Each function invokes a new "Execution Context"

*/

function b() {
  var myVar;
  console.log(myVar);
}

function a() {
  var myVar = 2;
  console.log(myVar);
  b();
}

// This code is running within the Global Execution context
var myVar = 1;
console.log(myVar);
a();

// a() and b() have been popped of the stack
// currently running the global execution context
console.log(myVar);