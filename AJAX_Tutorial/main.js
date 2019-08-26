// Create listener
var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info");

//'https://learnwebcode.github.io/json-example/animals-1.json';
var stringURL = 'https://learnwebcode.github.io/json-example/animals-';
var pageCounter = 1;


// Main
btn.addEventListener("click", function () {
  // Make request
  var newRequest = new XMLHttpRequest();
  var strTemp = '';

  strTemp = stringURL + pageCounter + '.json';
  //console.log(strTemp);

  // Get JSON then render it
  getJSON(newRequest, strTemp);

  newRequest.send();

  pageCounter++;

  //console.log('Page Counter ' + pageCounter);

  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }

});

// >>> Subroutines <<

//Create Asynchronous JavaScript and XML (now JASON)
function getJSON(ourRequest, strUrl) {

  // Get HttpRequest and then load
  ourRequest.open('GET', strUrl);

  //Load response
  ourRequest.onload = function () {

    // Check for connection problems
    if (ourRequest.status >= 200 && ourRequest.status < 400) {

      // Use JSON parser
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {

      console.log("Not connected to the server");
    }

  };

}

// Sub Render HTML
function renderHTML(data) {

  // Insert HTML into div
  var htmlString = "";

  // List species
  for (i = 0; i < data.length; i++) {

    htmlString += "<p>" + data[i].name + " is a " + data[i].species + ". That likes to eat";

    // List food likes`
    for (ii = 0; ii < data[i].foods.likes.length; ii++) {

      // IF there are 2 items or more and the word "and"
      if (ii == 0) {

        htmlString += " " + data[i].foods.likes[ii];
      } else {

        htmlString += " and " + data[i].foods.likes[ii];
      }

    }

    htmlString += ' and dislikes ';

    // List disliked foods
    for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {

      // IF there are 2 items or more and the word "and"
      if (ii == 0) {

        htmlString += " " + data[i].foods.dislikes[ii];
      } else {

        htmlString += " and " + data[i].foods.dislikes[ii];
      }

    }

    htmlString += ".</p>";
  }

  animalContainer.insertAdjacentHTML("beforeend", htmlString);
}