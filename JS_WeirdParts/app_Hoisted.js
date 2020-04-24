/* Execution Context -Create and hoisting */

/* Setup Memory Space for Variable and Functions "Hoisting"
  !) All variables are initially set to undefined

*/

b();
console.log(a);

var a = "Hello World";

function b() {
  console.log("Called B!");
}