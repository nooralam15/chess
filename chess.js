
//create the chess board 
function createGridArray() {
    //create and return a grid array
    return [["b2", "b3", "b4", "b5", "b6", "b4", "b3", "b2"],
            ["b1", "b1", "b1", "b1", "b1", "b1", "b1", "b1"],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            ["w1", "w1", "w1", "w1", "w1", "w1", "w1", "w1"],
            ["w2", "w3", "w4", "w5", "w6", "w4", "w3", "w2"]]
}

//this function will create an array of divs that will later be used to efficiently update the gameboard
function createDivArray(grid) {
    //creatign a temporary array that will store the array of divs
    let temp = []
    for (let row = 0; row < num_row; row++) {
        let tempRow = []
        if (row % 2 == 0) {
            for (let col = 0; col < num_col; col++) {   
                if (col % 2 == 0) {
                    tempRow.push(cellMechanics(row,col, 0,0))
                }
                else {
                    tempRow.push(cellMechanics(row, col, 0,1))
                }
            }
        }
        else {
            for (let col = 0; col < num_col; col++) {
                if (col % 2 == 0) {
                    tempRow.push(cellMechanics(row, col, 1,0))

                }
                else {
                    tempRow.push(cellMechanics(row, col, 1,1))
                }
            }
        }
        temp.push(tempRow)
    }
    return temp
}

//function creates a div element and sets up various properties for each cell
function cellMechanics (rowVal, colVal, rowDes, colDes) {
    //create a div element for each element in the 2d grid
    let divEl = document.createElement("div")

    //add class that will give each cell its common design
    divEl.classList.add("board")

    //add en eventListener to each divEl
    divEl.addEventListener("click", cellClicked)

    //add dataset values for rows and columns
    divEl.dataset.row = rowVal
    divEl.dataset.col = colVal

    //calls funnctiont that will display chess pattern
    displayPattern(rowDes, colDes, divEl)
    
    return divEl
}

//function displays chess board pattern 
function displayPattern (rowDes, colDes, divEl) {
    if (rowDes == 0 && colDes == 1 || rowDes == 1 && colDes == 0) {
        divEl.classList.add("darkBrown")
    }
    else {
        divEl.classList.add("lightBrown")
    }
    document.getElementById("container").append(divEl)

}

function cellClicked(event) {
    event.target.classList.add("selectedPiece")
    console.log(event.target)
}

//this function goes through the chessBoard array and will update the board to display the correct piece image
function updateBoard() {
    for (let row = 0; row < num_row; row++) {
        for(let col = 0; col < num_col; col++) {
            if (chessBoard[row][col] == "w1") {
                divBoard[row][col].innerHTML = `<img src = images/whitePawn.png>`
            }
            if (chessBoard[row][col] == "w2") {
                divBoard[row][col].innerHTML = `<img src = images/whiteRook.png>`
            }
            if (chessBoard[row][col] == "w3") {
                divBoard[row][col].innerHTML = `<img src = images/whiteBishop.png>`
            }
            if (chessBoard[row][col] == "w4") {
                divBoard[row][col].innerHTML = `<img src = images/whiteKnight.png>`
            }
            if (chessBoard[row][col] == "w5") {
                divBoard[row][col].innerHTML = `<img src = images/whiteQueen.png>`
            }
            if (chessBoard[row][col] == "w6") {
                divBoard[row][col].innerHTML = `<img src = images/whiteKing.png>`
            }
            if (chessBoard[row][col] == "b1") {
                divBoard[row][col].innerHTML = `<img src = images/blackPawn.png>`
            }
            if (chessBoard[row][col] == "b2") {
                divBoard[row][col].innerHTML = `<img src = images/blackRook.png>`
            }
            if (chessBoard[row][col] == "b3") {
                divBoard[row][col].innerHTML = `<img src = images/blackBishop.png>`
            }
            if (chessBoard[row][col] == "b4") {
                divBoard[row][col].innerHTML = `<img src = images/blackKnight.png>`
            }
            if (chessBoard[row][col] == "b5") {
                divBoard[row][col].innerHTML = `<img src = images/blackQueen.png>`
            }
            if (chessBoard[row][col] == "b6") {
                divBoard[row][col].innerHTML = `<img src = images/blackKing.png>`
            }
        }
    }
    
}






console.log(createGridArray)