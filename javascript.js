const containerForAll = document.querySelector("#container")
const containerForSquares = document.querySelector(".squareContainer")    
const buttonCreateSquares = document.createElement("button")
buttonCreateSquares.textContent = "Number of squares"
buttonCreateSquares.className = "button"
containerForAll.appendChild(buttonCreateSquares)


buttonCreateSquares.addEventListener("click", createSquares)

function createSquares(num) {
    function enterNumber() {
        num = parseInt(prompt("Number of squares per side"))
        while(num >= 100){
            num = parseInt(prompt("Number of squares per side"))
        }
    }
    enterNumber()
    for(let i = 0; i < num * num; i++) {
        const square = document.createElement("div")
        square.className = "addSquare"
        square.style.height = (600/num) + "px";
        square.style.width = (600/num) + "px";
        containerForSquares.appendChild(square) 
        square.addEventListener("mouseenter", changeColor)
        square.addEventListener("mouseleave", defaultColor)
        function changeColor() {
            let randomColor1 = Math.random() * 256 + 1
            let randomColor2 = Math.random() * 256 + 1
            let randomColor3 = Math.random() * 256 + 1
            square.style.backgroundColor =  `rgb(${randomColor1},${randomColor2},${randomColor3})`
            square.addEventListener("mouseover", () => {
                if(!square.style.opacity)
                    square.style.opacity = 1
                    square.style.opacity -= 0.1; 
                    console.log(square.style.opacity) 
                })
            }
        function defaultColor() {
            square.style.backgroundColor = "lightblue"
        }
    }
    buttonCreateSquares.addEventListener("click", refreshPage)
    function refreshPage(){
        window.location.reload()
    }
    buttonCreateSquares.removeEventListener("click", createSquares)
}


   

    




   