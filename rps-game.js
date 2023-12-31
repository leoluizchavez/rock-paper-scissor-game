// Rock Paper Scissors Game
const game = ["Rock", "Paper", "Scissors"] // computer picks
const gameImg = ["imgs/rock.png", "imgs/paper.png", "imgs/scissors.png"] //image file paths

let tries = 10 // number of tries
let compPoints = 0 // number of computer points
let playerPoints = 0 // number of player points

const playerPointsEl = document.getElementById("player-points-el")
const compPointsEl = document.getElementById("comp-points-el")
const playAreaEl = document.getElementById("play-area")

// button variables
const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const sciBtn = document.getElementById("sci-btn")
const resetBtn = document.getElementById("reset-btn")

// element variables
const compEl = document.getElementById("comp-turn-el")
const playerEl = document.getElementById("player-turn-el")
const resultEl = document.getElementById("result")
const turnsEl = document.getElementById("turns-left-el")
const winnerEl = document.getElementById("final-win-el")

// image variables
const compImgEl = document.getElementById("comp-img")
const playerImgEl = document.getElementById("player-img")

turnsEl.innerHTML = `Turns left <br/> ${tries}`

rockBtn.addEventListener("click", function(){
    if(tries !== 0){ //this if statement runs the code as longs as tries is not zero, this prevents the program from running the code even after tries has reached zero
        playerInput = "Rock"
        playerImgEl.innerHTML = `<img class="rock-img" src="${gameImg[0]}" alt="rock hand gesture">`
        let result = startGame(playerInput)
        resultEl.innerHTML = result
        addPoints(result)
        turnsEl.innerHTML = `Turns left <br/> ${tries}`
        compare(playerPoints,compPoints)
    }
})

paperBtn.addEventListener("click", function(){
    if(tries !== 0){
        playerInput = "Paper"
        playerImgEl.innerHTML = `<img class="paper-img" src="${gameImg[1]}" alt="paper hand gesture">`
        let result = startGame(playerInput)
        resultEl.innerHTML = result
        addPoints(result)
        turnsEl.innerHTML = `Turns left <br/> ${tries}`
        compare(playerPoints,compPoints)
    }
})

sciBtn.addEventListener("click", function(){
    if(tries !== 0){
        playerInput = "Scissors"
        playerImgEl.innerHTML = `<img class="paper-img" src="${gameImg[2]}" alt="paper hand gesture">`
        let result = startGame(playerInput)
        resultEl.innerHTML = result
        addPoints(result)
        turnsEl.innerHTML = `Turns left <br/> ${tries}`
        compare(playerPoints,compPoints)
    }
})

resetBtn.addEventListener("dblclick", function(){
    tries = 10
    compPoints = 0 
    playerPoints = 0
    playerPointsEl.innerHTML = `Player points <br/> ...`
    compPointsEl.innerHTML = `Computer points <br/> ...`
    playerImgEl.textContent = ``
    compImgEl.textContent = ``
    compEl.innerHTML = `Computer Turn <br> ...` 
    playerEl.innerHTML = `Player Turn <br> ...`
    resultEl.textContent = `...`
    turnsEl.innerHTML = `Turns left <br/> ${tries}`
    winnerEl.textContent = ``
})

// this function will return 3 choices: win, tie, or lose
function startGame(input){
    let compIndex = Math.floor(Math.random()*game.length) //this code determines the computer's picks
    let comp = game[compIndex]
    let compImg = gameImg[compIndex]
    compImgEl.innerHTML = `<img src=${compImg}>`
    compEl.innerHTML = `Computer Turn <br> ${comp}` 
    playerEl.innerHTML = `Player Turn <br> ${input}`

    if (input === comp){
        return "It's a tie"
    } else if (input === "Rock" && comp === "Paper"){
        return "You win"
    } else if (input === "Paper" && comp === "Rock") {
        return "You win"
    } else if (input === "Scissors" && comp === "Paper"){
        return "You win"
    } else {
        return "You lose"
    }

}



// this function will evaluate the results to convert it into points
function addPoints(results){ 
    if(results === "You win"){
        playerPoints++ // increment playerpoints by 1
        tries--// decrement tries by 1 
        playerPointsEl.innerHTML = `Player points <br/> ${playerPoints}`
        compPointsEl.innerHTML = `Computer points <br/> ${compPoints}`
    }else if(results === "It's a tie"){
        playerPoints++
        compPoints++
        tries--
        playerPointsEl.innerHTML = `Player points <br/> ${playerPoints}`
        compPointsEl.innerHTML = `Computer points <br/> ${compPoints}`
    } else if(results === "You lose"){
        compPoints++
        tries--
        playerPointsEl.innerHTML = `Player points <br/> ${playerPoints}`
        compPointsEl.innerHTML = `Computer points <br/> ${compPoints}`
    }
}

//who wins function, this function compares the player and computer points to determine the final winner
function compare(playerPoints,compPoints){
    if(tries === 0){
        if(playerPoints>compPoints){
            winnerEl.innerHTML = `Final Winner: Player Wins!`
        } else if(playerPoints === compPoints){
            winnerEl.innerHTML = `Final Winner: It's a tie!`
        } else {
            winnerEl.innerHTML = `Final Winner: Computer Wins!`
        }
    }
}