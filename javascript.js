const containerForSquares = document.querySelector(".container")

function createSquares(num) {
    for(let i = 0; i < num * num; i++) {
        const square = document.createElement("div")
        square.className = "addSquare"
        containerForSquares.appendChild(square)
        square.style.height = (600/num) + "px";
        square.style.width = (600/num) + "px";
        square.addEventListener("mouseenter", changeColor)
        square.addEventListener("mouseleave", defaultColor)

        function changeColor() {
            let random1 = Math.random() * 256 + 1
            let random2 = Math.random() * 256 + 1
            let random3 = Math.random() * 256 + 1
          square.style.backgroundColor =  `rgb(${random1},${random2},${random3})`
        }

        function defaultColor() {
            square.style.backgroundColor =  "lightblue"
        }
    }
}

createSquares(19)





