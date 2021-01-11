
//create the chess board

function createGridArray() {
    //create and return a grid array
    return [[0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]]
}

function displayGridArray(grid) {
    for (let row = 0; row < num_row; row ++) {
        for (let col = 0; col < num_col; col ++) {
            //create a div for each element in 2d grid
            let divEl = document.createElement("div")

            //add the appropriate class lsit to the board
            if (grid[row][col] == 0) {
                divEl.classList.add("lightBrown")
            }

            if (grid[row][col] == 1) {
                divEl.classList.add("darkBrown")
            }
            

            // add div to container
            document.getElementById("container").append(divEl)
        }
    }
}




console.log(createGridArray)