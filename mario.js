// getting height

let height = parseInt(prompt("Enter a height: "))
printPyramid(height);



function printPyramid(height) {
  console.log("Uh oh... the pyramid is under construction.");
  console.log("Check back soon, our developers are hard at work as we speak!");

  // TODO #1
  // print that pyramid!
  

  for (let row = 0; row < height; row++) {   
    
    let bricks = row + 2;            // the amount of bricks
    let space = height - row - 1;    // the spaces needed

    let rowStr = "";    // empty string
    for (let i = 0;i < space; i++){
      let space = ".";  // the spaces between the bricks
      rowStr += space;    
    }
    for (let i = 0; i < bricks; i++) {    // the brick making
      rowStr += "#"
    }
  console.log(rowStr)
  //DOM
  rowElem = document.createElement("p");
  rowElem.innerHTML = rowStr;
  document.getElementById("pyramid").appendChild(rowElem);
  }
}