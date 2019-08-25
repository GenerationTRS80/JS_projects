// Create listener
var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info");

//'https://learnwebcode.github.io/json-example/animals-1.json';
var stringURL = 'https://learnwebcode.github.io/json-example/animals-';
var pageCounter = 1;



btn.addEventListener("click", function () {
  // Make request
  var newRequest = new XMLHttpRequest();
  var strTemp = '';

  strTemp = stringURL + pageCounter + '.json';
  console.log(strTemp);

  // Get JSON then render it
  getJSON(newRequest, strTemp);

  newRequest.send();

  pageCounter++;
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
  var htmlString = "";
  console.log(htmlString);

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
  }

  animalContainer.insertAdjacentHTML("beforeend", htmlString);


}