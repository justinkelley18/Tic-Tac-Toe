let cells = document.querySelectorAll('.row > div ');
let Player1 = true;
let turnCount = 0;
const dGame = "DRAW!"

// let refresh = document.querySelector(" board ");


console.log(cells)

for (let i = 0; i < cells.length; i++) {
    (cells[i]).addEventListener('click', cellClicked, { once: true }, checkGame())
}


function cellClicked() {
    if (Player1 == true) {
        event.target.textContent = "X"
        Player1 = false;
        turnCount++
        console.log(turnCount)
        checkGame()
    }
    else if (Player1 == false) {
        event.target.textContent = "O"
        Player1 = true;
        turnCount++
        console.log(turnCount)
        checkGame()
    }
}
//painting
//checkGame X
function checkGame() {
    //top a
    if (cells[0].textContent === "X" && cells[1].textContent === "X" && cells[2].textContent === "X") {
        alert("X is the winner")
        //slant right
    } else if (cells[0].textContent === "X" && cells[4].textContent === "X" && cells[8].textContent === "X") {
        alert("X is the winner")
        //straight down left
    } else if (cells[0].textContent === "X" && cells[3].textContent === "X" && cells[6].textContent === "X") {
        alert("X is the winner")
        //middle a
    } else if (cells[3].textContent === "X" && cells[4].textContent === "X" && cells[5].textContent === "X") {
        alert("X is the winner")
        //bottom a
    } else if (cells[6].textContent === "X" && cells[7].textContent === "X" && cells[8].textContent === "X") {
        alert("X is the winner")
        //down mid
    } else if (cells[1].textContent === "X" && cells[4].textContent === "X" && cells[7].textContent === "X") {
        alert("X is the winner")
        //down right
    } else if (cells[2].textContent === "X" && cells[5].textContent === "X" && cells[8].textContent === "X") {
        alert("X is the winner")
        //slant left
    } else if (cells[2].textContent === "X" && cells[4].textContent === "X" && cells[6].textContent === "X") {
        alert("X is the winner")
    }
    //Top a
    if (cells[0].textContent === "O" && cells[1].textContent === "O" && cells[2].textContent === "O") {
        return alert("O is the winner!")
        //Mid A
    } else if (cells[3].textContent === "O" && cells[4].textContent === "O" && cells[5].textContent === "O") {
        return alert("O is the winner!")
        //Bottom A
    } else if (cells[6].textContent === "O" && cells[7].textContent === "O" && cells[8].textContent === "O") {
        return alert("O is the winner!")
        //Down Right
    } else if (cells[0].textContent === "O" && cells[3].textContent === "O" && cells[6].textContent === "O") {
        return alert("O is the winner!")
        //Down mid
    } else if (cells[1].textContent === "O" && cells[4].textContent === "O" && cells[7].textContent === "O") {
        return alert("O is the winner!")
        //Down right
    } else if (cells[2].textContent === "O" && cells[5].textContent === "O" && cells[8].textContent === "O") {
        return alert("O is the winner!")
        //Slant right
    } else if (cells[0].textContent === "O" && cells[4].textContent === "O" && cells[8].textContent === "O") {
        return alert("O is the winner!")
        //Slant left
    } else if (cells[2].textContent === "O" && cells[4].textContent === "O" && cells[6].textContent === "O") {
       return alert("O is the winner!")
        //Draw function
    } if (turnCount === 9){
        // document.body.addEventListener('click', board, { once: true }); {
         alert("DRAW!!");
    }
}