
printPyramid();
// TODO #2
// Take in user input for the height


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");
    

    // TODO #1
    // print that pyramid!

    //getting user input
    let n = parseInt(prompt("Enter"));
    let string = "";   //getting an empty string

    for(let i =1; i <=n; i++){   // outer loop
        for (let j = 0; j< n-i; j++){      //inner loop
            string += " ";      //prints out spaces
        }
        for (let k =-1; k < i; k++){  // prints out the bricks
            string += "#";
        }
        string += "\n";
    }
console.log(string)
}
