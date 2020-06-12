/* Asynchronous call backs
    -- Scope: means where I can access the variable
    -- Chain is the link to the out lexical environments
*/

// long running function
function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
  console.log('finished functions');
}

function clickHandler() {
  console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');