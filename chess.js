
//create the chess board

function createGridArray() {
    //create and return a grid array
    return [[2, 3, 4, 5, 6, 4, 3, 2],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [2, 3, 4, 5, 6, 4, 3, 2]]
}


function displayGridArray(grid) {
    for (let row = 0; row < num_row; row++) {
        if (row % 2 == 0) {
            for (let col = 0; col < num_col; col++) {
                if (col % 2 == 0) {
                    cellDesign(0,0)
                }
                else {
                    cellDesign(0,1)
                }
            }
        }
        else {
            for (let col = 0; col < num_col; col++) {
                if (col % 2 == 0) {
                    cellDesign(1,0)

                }
                else {
                    cellDesign(1,1)
                }
            }
        }
        
    }
}


function cellDesign (rowVal, colVal) {
    let divEl = document.createElement("div")
    if (rowVal == 0 && colVal == 0) {
        divEl.classList.add("lightBrown")
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
}


function pieceDisplay() {

}




console.log(createGridArray)