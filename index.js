let imgsLeft = [
    "images/rock-left.png",
    "images/paper-left.png",
    "images/scissors-left.png"
]

let imgsRight = [
    "images/rock-right.png",
    "images/paper-right.png",
    "images/scissors-right.png"
]

const leftHand = document.getElementById("left-hand")
const rightHand = document.getElementById("right-hand")
const winner = document.getElementById("winner")

function play() {
    let player1 = Math.floor(Math.random()*3)
    if (player1 === 0) {
        console.log("rock")
        leftHand.innerHTML = '<img src="' + imgsLeft[0] + '" class="rounded float-end img-fluid" alt="paper-left">'
    } else if (player1 === 1) {
        console.log("paper")
        leftHand.innerHTML = '<img src="' + imgsLeft[1] + '" class="rounded float-end img-fluid" alt="paper-left">'
    } else if (player1 === 2) {
        console.log("scissors")
        leftHand.innerHTML = '<img src="' + imgsLeft[2] + '" class="rounded float-end img-fluid" alt="paper-left">'
    }

    let player2 = Math.floor(Math.random()*3)
    if (player2 === 0) {
        console.log("rock")
        rightHand.innerHTML = '<img src="' + imgsRight[0] + '" class="rounded float-end img-fluid" alt="paper-left">'
    } else if (player2 === 1) {
        console.log("paper")
        rightHand.innerHTML = '<img src="' + imgsRight[1] + '" class="rounded float-end img-fluid" alt="paper-left">'
    } else if (player2 === 2) {
        console.log("scissors")
        rightHand.innerHTML = '<img src="' + imgsRight[2] + '"  class="rounded float-end img-fluid" alt="paper-left">'
    }

    if (player1 === 0 && player2 ===1) {
        winner.textContent = "player2 win!"
        leftHand.style.backgroundColor = "red"
        rightHand.style.backgroundColor = "green"
    } else if (player1 === 0 && player2 === 2) {
        winner.textContent = "player1 win!"
        leftHand.style.backgroundColor = "green"
        rightHand.style.backgroundColor = "red"
    } else if (player1 === 0 && player2 === 0) {
        winner.textContent = "no winner!"
        leftHand.style.backgroundColor = "yellow"
        rightHand.style.backgroundColor = "yellow"
    } else if (player1 === 1 && player2 === 0) {
        winner.textContent = "player1 win!"
        leftHand.style.backgroundColor = "green"
        rightHand.style.backgroundColor = "red"
    } else if (player1 === 1 && player2 === 1) {
        winner.textContent = "no winner!"
        leftHand.style.backgroundColor = "yellow"
        rightHand.style.backgroundColor = "yellow"
    } else if (player1 === 1 && player2 === 2) {
        winner.textContent = "player2 win!"
        leftHand.style.backgroundColor = "red"
        rightHand.style.backgroundColor = "green"
    } else if (player1 === 2 && player2 === 0) {
        winner.textContent = "player2 win!"
        leftHand.style.backgroundColor = "red"
        rightHand.style.backgroundColor = "green"
    } else if (player1 === 2 && player2 === 1) {
        winner.textContent = "player1 win!"
        leftHand.style.backgroundColor = "green"
        rightHand.style.backgroundColor = "red"
    } else if (player1 === 2 && player2 === 2) {
        winner.textContent = "no winner!"
        leftHand.style.backgroundColor = "yellow"
        rightHand.style.backgroundColor = "yellow"
    }
}

