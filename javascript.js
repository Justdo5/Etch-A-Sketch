const containerForSquares = document.querySelector(".container")



function createSquares(num) {
    for(let i = 0; i < num * num; i++) {
        const square = document.createElement("div")
        square.className = "addSquare"
        containerForSquares.appendChild(square)
        square.style.height = (600/num) + "px";
        square.style.width = (600/num) + "px";
    }
}

createSquares(16)