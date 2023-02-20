// getting height
//let height = parseInt(prompt("Enter a height: "))



function printPyramid(height, brick) {
    // clears the content 
    document.getElementById("pyramid").innerHTML = "";

    //console announcment
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO #1
    // print that pyramid!
    
    for (let row = 0; row < height; row++) {   

        
        let bricks = row + 2;            // the amount of bricks
        let space = height - row - 1;    // the spaces needed

        let rowStr = "";    // empty string
        for (let i = 0;i < space; i++){
        let space = '&nbsp';  // the spaces between the bricks, using the &nbsp allows us to print the pyramid without having the dots show up
        rowStr += space;    
        }
        for (let i = 0; i < bricks; i++) {
              // the brick making
            rowStr += brick // the brick references the dropdown box and the value you select from it will change the brick
        }
    console.log(rowStr)
    //DOM
    rowElem = document.createElement("p");
    rowElem.innerHTML = rowStr;
    document.getElementById("pyramid").appendChild(rowElem);
    }
}
// this updates the pyramid to make it slide instead of hitting the button to print
// it also uses the dom to get the dropdown box and get the value selected
//slider
function slideMyPyramid(){
    let slider = document.getElementById("heightSlider");
    let height = slider.value;

    let dropdown = document.getElementById("dropdown");
    let brick = dropdown.value;

    printPyramid(height, brick);
}

printPyramid();
