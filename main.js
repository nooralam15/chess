// Noor Alam CS20 chess project
//this file will include the basic code such as runninf functions, and setting up images, and creating the grid.


//global variables
let chessBoard = createGridArray()
let num_row = 8
let num_col = 8


//call function that will make the chess baord viisble on the screen
//divBoard will store an array of all the div elements present.
let divBoard = createDivArray(chessBoard)

//will display the pieces onto the board
updateBoard()


console.log(divBoard)