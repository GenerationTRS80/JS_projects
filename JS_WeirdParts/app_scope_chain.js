/* Scope Chain
    -- Scope: means where I can access the variable
    -- Chain is the link to the out lexical environments
*/

// a() is the outer lexical environment of b()
function a() {

  function b() {
    console.log(myVar);
  }

  // var myVar = 2;
  b();
}

// This code is running within the Global Execution context
var myVar = 1;
a();
// b();