/* Global Execution Context 
  1) Phase 1 - Create memory for the variables
  2) Each function invokes a new "Execution Context"

  -Create and hoisting

*/

function b() {
  console.log("called b!");
}

b();

console.log(a);

var a = "Hello World";

console.log(a);

// undefined is the value that variables receive in the creation phase
// of creating an execution context

/* if (a === undefined) {

  console.log('a is Undefined!');
} else {
  console.log('a is defined');
} */
