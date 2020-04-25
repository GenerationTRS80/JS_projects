/* Scope Chain
    -- Scope: means where I can access the variable
    -- Chain is the link to the out lexical environments
*/

function b() {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  b();
}

// This code is running within the Global Execution context
var myVar = 1;
a();