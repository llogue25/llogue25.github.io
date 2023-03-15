
var heightElem = document.getElementById("height");
var formElem = document.getElementById("draw-form");

// set a handler function for the form's submission event
formElem.onsubmit = function(event) {

  // QUIZ
  // what happens if we don't do this?
  event.preventDefault();
  // the event.preventDefault stops the page from reloading and allows the code to handle the form submission

  // QUIZ
  // what happens if we don't do this?
  clearError();
  // if we dont call this function here than it will keep the error on the page even though the form is submitted correct.

  // figure out the height the user typed
  heightStr = heightElem.value;
  // convert the string to an int
  height = parseInt(heightStr);

  // TODO 1
  // if they didn't type anything at all, give a different error message,
  // something like "Please provide a height"
  // checks if the height input is a string or empty box
  if (isNaN(height)) {
    displayError("Please provide a height");
    return;
  }


  // convert the string to an int

  // if the height is not-a-number, yell at them and exit early
  // TODO 2
  // negative numbers and zero should also be rejected here
  // checking the height if its below zero
  if (height < 0) {
    displayError("Enter a height above zero.");
    return;
  }

  // if the height is absurdly tall, yell at them and exit early
  var tooTall = 100;
  if (height > tooTall) {
    displayError("Are you crazy? I can't build a pyramid that tall.");
    return;
  }

  // draw pyramid with the specified height
  drawPyramid(height);
}


/**
 * displayError
 *
 * Displays an error message on the text input, and colors it red
 */
function displayError(message) {
  heightElem.className = "invalid-field";
  document.querySelector(".error-message").innerHTML = message;
}


/*
 * clearError
 *
 * Undisplays the error message and removes the red CSS style
 */
function clearError() {
  // TODO 3
  // implement this function.
  let errors = document.querySelectorAll(".error");
  for (let error of errors) {
    error.classList.remove("display-error");
  }
  heightElem.classList.remove("invalid-field");
  document.querySelector(".error-message").innerHTML = "";
}



/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

  // first, clear the old content
  document.getElementById("pyramid").innerHTML = "";

  // for each row....
  for (var row = 0; row < height; row++) {

    // figure out number of bricks and spaces
    var numBricks = row + 2;
    var numSpaces = height - row - 1;

    // build up a string for this row
    var rowStr = "";
    for (var i = 0; i < numSpaces; i++) {
      var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
      rowStr += spaceChar;
    }
    for (var i = 0; i < numBricks; i++) {
      rowStr += "#";
    }

    // make a <p> element for this row, and insert it into the #pyramid container
    rowElem = document.createElement("p");
    rowElem.innerHTML = rowStr;
    document.getElementById("pyramid").appendChild(rowElem);
  }
}
