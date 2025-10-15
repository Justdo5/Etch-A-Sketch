const containerForSquares = document.querySelector(".container")

function createSquares(num) {
    num = parseInt(prompt("Number of squares per side"))
    while(num >= 100){
        num = parseInt(prompt("Number of squares per side"))
    }
    console.log(num)
    for(let i = 0; i < num * num; i++) {
       
        const square = document.createElement("div")
        square.className = "addSquare"
        containerForSquares.appendChild(square)
        square.style.height = (600/num) + "px";
        square.style.width = (600/num) + "px";
        square.addEventListener("mouseenter", changeColor)
        square.addEventListener("mouseleave", defaultColor)

        function changeColor() {
            let randomColor1 = Math.random() * 256 + 1
            let randomColor2 = Math.random() * 256 + 1
            let randomColor3 = Math.random() * 256 + 1
            square.style.backgroundColor =  `rgb(${randomColor1},${randomColor2},${randomColor3})`
        }

        function defaultColor() {
            square.style.backgroundColor =  "lightblue"
        }
    }
}

createSquares()






