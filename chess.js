
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

    //adds an id to each div element that will store the divs coordinates
    divEl.id = rowVal + "-" + colVal

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
    
    if (event.target.nodeName == 'IMG' ) {
        if(!selectedCell) {
            selectedCell = (event.target.parentNode)
            selectedCell.classList.add("selectedPiece")
            pieceSelector(selectedCell)
        }
        else {
            selectedCell.classList.remove("selectedPiece")
            selectedCell = (event.target)
            selectedCell.classList.add("selectedPiece")
        }
    }
  

    
    console.log(selectedCell)
    console.log(event.target)
}


//this function goes through the chessBoard array and will update the board to display the correct piece image
function displayPieces() {
    for (let row = 0; row < num_row; row++) {
        for(let col = 0; col < num_col; col++) {
            if (chessBoard[row][col] == "w1") {
                divBoard[row][col].innerHTML = `<img src = images/whitePawn.png>`
                divBoard[row][col].dataset.piece = "Pawn"
            }
            if (chessBoard[row][col] == "w2") {
                divBoard[row][col].innerHTML = `<img src = images/whiteRook.png>`
                divBoard[row][col].dataset.piece = "Rook"
            }
            if (chessBoard[row][col] == "w3") {
                divBoard[row][col].innerHTML = `<img src = images/whiteBishop.png>`
                divBoard[row][col].dataset.piece = "Bishop"
            }
            if (chessBoard[row][col] == "w4") {
                divBoard[row][col].innerHTML = `<img src = images/whiteKnight.png>`
                divBoard[row][col].dataset.piece = "Knight"
            }
            if (chessBoard[row][col] == "w5") {
                divBoard[row][col].innerHTML = `<img src = images/whiteQueen.png>`
                divBoard[row][col].dataset.piece = "Queen"
            }
            if (chessBoard[row][col] == "w6") {
                divBoard[row][col].innerHTML = `<img src = images/whiteKing.png>`
                divBoard[row][col].dataset.piece = "King"
            }
            if (chessBoard[row][col] == "b1") {
                divBoard[row][col].innerHTML = `<img src = images/blackPawn.png>`
                divBoard[row][col].dataset.piece = "Pawn"
            }
            if (chessBoard[row][col] == "b2") {
                divBoard[row][col].innerHTML = `<img src = images/blackRook.png>`
                divBoard[row][col].dataset.piece = "Rook"
            }
            if (chessBoard[row][col] == "b3") {
                divBoard[row][col].innerHTML = `<img src = images/blackBishop.png>`
                divBoard[row][col].dataset.piece = "Bishop"
            }
            if (chessBoard[row][col] == "b4") {
                divBoard[row][col].innerHTML = `<img src = images/blackKnight.png>`
                divBoard[row][col].dataset.piece = "Knight"
            }
            if (chessBoard[row][col] == "b5") {
                divBoard[row][col].innerHTML = `<img src = images/blackQueen.png>`
                divBoard[row][col].dataset.piece = "Queen"
            }
            if (chessBoard[row][col] == "b6") {
                divBoard[row][col].innerHTML = `<img src = images/blackKing.png>`
                divBoard[row][col].dataset.piece = "King"
            }
        }
    }
    
}

//thid function will see which piece is clicked and will then decide how the piece will move
function pieceSelector(pieceInfo) {
    //creates variables that will store the dataset values for row & col
    let row = Number(pieceInfo.dataset.row)
    let col = Number(pieceInfo.dataset.col)
    if (pieceInfo.dataset.piece == "Pawn") {
        movePawn(pieceInfo, row, col)
    }
    if (pieceInfo.dataset.piece == "Rook") {
        moveRook(pieceInfo, row, col)
    }
    if (pieceInfo.dataset.piece == "Bishop") {
        moveBishop(pieceInfo, row, col)
    }
    if (pieceInfo.dataset.piece == "Knight") {
        moveKnight(pieceInfo, row, col)
    }
    if (pieceInfo.dataset.piece == "Queen") {
        moveQueen(pieceInfo, row, col)
    }
    if (pieceInfo.dataset.piece == "King") {
        moveKing(pieceInfo, row, col)
    }

}

//function will control the movements for the pawn
function movePawn(pieceData, row, col) {
    row --
    document.getElementById(`${row}-${col}`).classList.toggle("highlightedMoves")
    
    

}

function moveRook(pieceData, row, col) {
    
}

function moveBishop(pieceData, row, col) {
    
}

function moveKnight(pieceData, row, col) {
    
}

function moveQueen(pieceData, row, col) {
    
}

function moveKing(pieceData, row, col) {
    
}


console.log(createGridArray)