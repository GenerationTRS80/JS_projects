// Create listener
var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info");
var stringURL = 'https://learnwebcode.github.io/json-example/animals-1.json';



btn.addEventListener("click", function () {
  // Mke HttpRequest
  var newRequest = new XMLHttpRequest();

  console.log(stringURL);

  // Get JSON then render it
  getJSON(newRequest, stringURL);

  newRequest.send();

});

//Create Asynchronous JavaScript and XML (now JASON)
function getJSON(ourRequest, strUrl) {

  console.log(strUrl);

  // Get HttpRequest and then load
  ourRequest.open('GET', strUrl);

  //Load response
  ourRequest.onload = function () {

    // Use JSON parser
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0].name);
    renderHTML(ourData);
  };

}


function renderHTML(data) {

  // Insert HTML into div
  var htmlString = "This is a test";
  console.log(htmlString);

  animalContainer.insertAdjacentHTML("beforeend", htmlString);


}