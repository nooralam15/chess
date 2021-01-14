
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


function createDivArray(grid) {
    let temp = []
    for (let row = 0; row < num_row; row++) {
        let tempRow = []
        if (row % 2 == 0) {
            for (let col = 0; col < num_col; col++) {   
                if (col % 2 == 0) {
                    tempRow.push(cellDesign(0,0))
                }
                else {
                    tempRow.push(cellDesign(0,1))
                }
            }
        }
        else {
            for (let col = 0; col < num_col; col++) {
                //let gridData = grid[row][col]
                //pieceDisplay(gridData)
                
                if (col % 2 == 0) {
                    tempRow.push(cellDesign(1,0))

                }
                else {
                    tempRow.push(cellDesign(1,1))
                }
            }
        }
        temp.push(tempRow)
    }
    return temp
}

//function displays the Chess pattern
function cellDesign (rowVal, colVal) {
    let divEl = document.createElement("div")
    if (rowVal == 0 && colVal == 0) {
        divEl.classList.add("lightBrown")
        //divEl.innerHTML = `<img src = images/whitePawn.png width="80px" height="75px">`
        document.getElementById("container").append(divEl)
    }
    else if (rowVal == 0 && colVal == 1) {
        divEl.classList.add("darkBrown")
        document.getElementById("container").append(divEl) 
    }
    else if (rowVal == 1 && colVal == 0) {
        divEl.classList.add("darkBrown")
        document.getElementById("container").append(divEl)
    }
    else {
        divEl.classList.add("lightBrown")
        document.getElementById("container").append(divEl)
    }
    return divEl
}

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