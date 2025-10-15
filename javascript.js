const containerForSquares = document.querySelector(".container")
const buttonContainer = document.createElement("div")
buttonContainer.className= "buttonContainer"
document.body.appendChild(buttonContainer)
const buttonCreateSquares = document.createElement("button")
buttonCreateSquares.textContent = "Number of squares"
buttonCreateSquares.className = "button"
buttonContainer.appendChild(buttonCreateSquares)
const buttonRefresh = document.createElement("button")
buttonRefresh.textContent = "Refresh"
buttonRefresh.className = "button"
buttonContainer.appendChild(buttonRefresh)



buttonRefresh.addEventListener("click", refreshPage)
function refreshPage(){
    window.location.reload()
}

function createSquares(num) {
    function enterNumber(){
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
        square.addEventListener("mouseenter", changeColor)
        square.addEventListener("mouseleave", defaultColor)
        containerForSquares.appendChild(square)
        
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


   

    




