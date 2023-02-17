let imgsLeft = [
    "images/gun-left.png",
    "images/rock-left.png",
    "images/fire-left.png",
    "images/scissors-left.png",
    "images/snake-left.png",
    "images/human-left.png",
    "images/tree-left.png",
    "images/wolf-left.png",
    "images/sponge-left.png",
    "images/paper-left.png",
    "images/air-left.png",
    "images/water-left.png",
    "images/dragon-left.png",
    "images/devil-left.png",
    "images/lightning-left.png"
]

let imgsRight = [
    "images/gun-right.png",
    "images/rock-right.png",
    "images/fire-right.png",
    "images/scissors-right.png",
    "images/snake-right.png",
    "images/human-right.png",
    "images/tree-right.png",
    "images/wolf-right.png",
    "images/sponge-right.png",
    "images/paper-right.png",
    "images/air-right.png",
    "images/water-right.png",
    "images/dragon-right.png",
    "images/devil-right.png",
    "images/lightning-right.png"
]

const leftHand = document.getElementById("left-hand")
const rightHand = document.getElementById("right-hand")
const winner = document.getElementById("winner")

function noWinner() {
    winner.textContent = "no winner!"
    leftHand.style.backgroundColor = "yellow"
    rightHand.style.backgroundColor = "yellow"
}

function player1Win() {
    winner.textContent = "player1 win!"
    leftHand.style.backgroundColor = "green"
    rightHand.style.backgroundColor = "red"
}

function player2Win() {
    winner.textContent = "player2 win!"
    leftHand.style.backgroundColor = "red"
    rightHand.style.backgroundColor = "green"
}

function hands(hand, n, imgsside) {
    hand.innerHTML = '<img src="' + imgsside[n] + '" class="rounded float-end img-fluid" alt="">'
}

function play() {
    let player1 = Math.floor(Math.random()*15)
    if (player1 === 0) {
        console.log("gun")
        hands(leftHand, player1, imgsLeft)
    } else if (player1 === 1) {
        console.log("rock")
        hands(leftHand, player1, imgsLeft)
    } else if (player1 === 2) {
        console.log("fire")
        hands(leftHand, player1, imgsLeft)
    } else if (player1 === 3) {
        console.log("scissors")
        hands(leftHand, player1, imgsLeft)
    } else if (player1 === 4) {
        console.log("snake")
        hands(leftHand, player1, imgsLeft)
    } else if (player1 === 5) {
        console.log("human")
        hands(leftHand, player1, imgsLeft)
    } else if (player1 === 6) {
        console.log("tree")
        hands(leftHand, player1, imgsLeft)
    } else if (player1 === 7) {
        console.log("wolf")
        hands(leftHand, player1, imgsLeft)
    } else if (player1 === 8) {
        console.log("sponge")
        hands(leftHand, player1, imgsLeft)
    } else if (player1 === 9) {
        console.log("paper")
        hands(leftHand, player1, imgsLeft)
    } else if (player1 === 10) {
        console.log("air")
        hands(leftHand, player1, imgsLeft)
    } else if (player1 === 11) {
        console.log("water")
        hands(leftHand, player1, imgsLeft)
    } else if (player1 === 12) {
        console.log("dragon")
        hands(leftHand, player1, imgsLeft)
    } else if (player1 === 13) {
        console.log("devil")
        hands(leftHand, player1, imgsLeft)
    } else if (player1 === 14) {
        console.log("lightning")
        hands(leftHand, player1, imgsLeft)
    }

    let player2 = Math.floor(Math.random()*15)
        if (player2 === 0) {
        console.log("gun")
        hands(rightHand, player2, imgsRight)
    } else if (player2 === 1) {
        console.log("rock")
        hands(rightHand, player2, imgsRight)
    } else if (player2 === 2) {
        console.log("fire")
        hands(rightHand, player2, imgsRight)
    } else if (player2 === 3) {
        console.log("scissors")
        hands(rightHand, player2, imgsRight)
    } else if (player2 === 4) {
        console.log("snake")
        hands(rightHand, player2, imgsRight)
    } else if (player2 === 5) {
        console.log("human")
        hands(rightHand, player2, imgsRight)
    } else if (player2 === 6) {
        console.log("tree")
        hands(rightHand, player2, imgsRight)
    } else if (player2 === 7) {
        console.log("wolf")
        hands(rightHand, player2, imgsRight)
    } else if (player2 === 8) {
        console.log("sponge")
        hands(rightHand, player2, imgsRight)
    } else if (player2 === 9) {
        console.log("paper")
        hands(rightHand, player2, imgsRight)
    } else if (player2 === 10) {
        console.log("air")
        hands(rightHand, player2, imgsRight)
    } else if (player2 === 11) {
        console.log("water")
        hands(rightHand, player2, imgsRight)
    } else if (player2 === 12) {
        console.log("dragon")
        hands(rightHand, player2, imgsRight)
    } else if (player2 === 13) {
        console.log("devil")
        hands(rightHand, player2, imgsRight)
    } else if (player2 === 14) {
        console.log("lightning")
        hands(rightHand, player2, imgsRight)
    }

    if (player1 === 0 && player2 === 0) {
        noWinner()
    } else if (player1 === 0 && player2 === 1) {
        player1Win()
    } else if (player1 === 0 && player2 ===2) {
        player1Win()
    } else if (player1 === 0 && player2 ===3) {
        player1Win()
    } else if (player1 === 0 && player2 ===4) {
        player1Win()
    } else if (player1 === 0 && player2 ===5) {
        player1Win()
    } else if (player1 === 0 && player2 ===6) {
        player1Win()
    } else if (player1 === 0 && player2 ===7) {
        player1Win()
    } else if (player1 === 0 && player2 ===8) {
        player2Win()
    } else if (player1 === 0 && player2 ===9) {
        player2Win()
    } else if (player1 === 0 && player2 ===10) {
        player2Win()
    } else if (player1 === 0 && player2 ===11) {
        player2Win()
    } else if (player1 === 0 && player2 ===12) {
        player2Win()
    } else if (player1 === 0 && player2 ===13) {
        player2Win()
    } else if (player1 === 0 && player2 ===14) {
        player2Win()
    } else if (player1 === 1 && player2 === 0) {
        player2Win()
    } else if (player1 === 1 && player2 === 1) {
        noWinner()
    } else if (player1 === 1 && player2 ===2) {
        player1Win()
    } else if (player1 === 1 && player2 ===3) {
        player1Win()
    } else if (player1 === 1 && player2 ===4) {
        player1Win()
    } else if (player1 === 1 && player2 ===5) {
        player1Win()
    } else if (player1 === 1 && player2 ===6) {
        player1Win()
    } else if (player1 === 1 && player2 ===7) {
        player1Win()
    } else if (player1 === 1 && player2 ===8) {
        player1Win()
    } else if (player1 === 1 && player2 ===9) {
        player2Win()
    } else if (player1 === 1 && player2 ===10) {
        player2Win()
    } else if (player1 === 1 && player2 ===11) {
        player2Win()
    } else if (player1 === 1 && player2 ===12) {
        player2Win()
    } else if (player1 === 1 && player2 ===13) {
        player2Win()
    } else if (player1 === 1 && player2 ===14) {
        player2Win()
    } else if (player1 === 2 && player2 === 0) {
        player2Win()
    } else if (player1 === 2 && player2 === 1) {
        player2Win()
    } else if (player1 === 2 && player2 ===2) {
        noWinner()
    } else if (player1 === 2 && player2 ===3) {
        player1Win()
    } else if (player1 === 2 && player2 ===4) {
        player1Win()
    } else if (player1 === 2 && player2 ===5) {
        player1Win()
    } else if (player1 === 2 && player2 ===6) {
        player1Win()
    } else if (player1 === 2 && player2 ===7) {
        player1Win()
    } else if (player1 === 2 && player2 ===8) {
        player1Win()
    } else if (player1 === 2 && player2 ===9) {
        player1Win()
    } else if (player1 === 2 && player2 ===10) {
        player2Win()
    } else if (player1 === 2 && player2 ===11) {
        player2Win()
    } else if (player1 === 2 && player2 ===12) {
        player2Win()
    } else if (player1 === 2 && player2 ===13) {
        player2Win()
    } else if (player1 === 2 && player2 ===14) {
        player2Win()
    } else if (player1 === 3 && player2 === 0) {
        player2Win()
    } else if (player1 === 3 && player2 === 1) {
        player2Win()
    } else if (player1 === 3 && player2 ===2) {
        player2Win()
    } else if (player1 === 3 && player2 ===3) {
        noWinner()
    } else if (player1 === 3 && player2 ===4) {
        player1Win()
    } else if (player1 === 3 && player2 ===5) {
        player1Win()
    } else if (player1 === 3 && player2 ===6) {
        player1Win()
    } else if (player1 === 3 && player2 ===7) {
        player1Win()
    } else if (player1 === 3 && player2 ===8) {
        player1Win()
    } else if (player1 === 3 && player2 ===9) {
        player1Win()
    } else if (player1 === 3 && player2 ===10) {
        player1Win()
    } else if (player1 === 3 && player2 ===11) {
        player2Win()
    } else if (player1 === 3 && player2 ===12) {
        player2Win()
    } else if (player1 === 3 && player2 ===13) {
        player2Win()
    } else if (player1 === 3 && player2 ===14) {
        player2Win()
    } else if (player1 === 4 && player2 === 0) {
        player2Win()
    } else if (player1 === 4 && player2 === 1) {
        player2Win()
    } else if (player1 === 4 && player2 ===2) {
        player2Win()
    } else if (player1 === 4 && player2 ===3) {
        player2Win()
    } else if (player1 === 4 && player2 ===4) {
        noWinner()
    } else if (player1 === 4 && player2 ===5) {
        player1Win()
    } else if (player1 === 4 && player2 ===6) {
        player1Win()
    } else if (player1 === 4 && player2 ===7) {
        player1Win()
    } else if (player1 === 4 && player2 ===8) {
        player1Win()
    } else if (player1 === 4 && player2 ===9) {
        player1Win()
    } else if (player1 === 4 && player2 ===10) {
        player1Win()
    } else if (player1 === 4 && player2 ===11) {
        player1Win()
    } else if (player1 === 4 && player2 ===12) {
        player2Win()
    } else if (player1 === 4 && player2 ===13) {
        player2Win()
    } else if (player1 === 4 && player2 ===14) {
        player2Win()
    } else if (player1 === 5 && player2 === 0) {
        player2Win()
    } else if (player1 === 5 && player2 === 1) {
        player2Win()
    } else if (player1 === 5 && player2 ===2) {
        player2Win()
    } else if (player1 === 5 && player2 ===3) {
        player2Win()
    } else if (player1 === 5 && player2 ===4) {
        player2Win()
    } else if (player1 === 5 && player2 ===5) {
        noWinner()
    } else if (player1 === 5 && player2 ===6) {
        player1Win()
    } else if (player1 === 5 && player2 ===7) {
        player1Win()
    } else if (player1 === 5 && player2 ===8) {
        player1Win()
    } else if (player1 === 5 && player2 ===9) {
        player1Win()
    } else if (player1 === 5 && player2 ===10) {
        player1Win()
    } else if (player1 === 5 && player2 ===11) {
        player1Win()
    } else if (player1 === 5 && player2 ===12) {
        player1Win()
    } else if (player1 === 5 && player2 ===13) {
        player2Win()
    } else if (player1 === 5 && player2 ===14) {
        player2Win()
    } else if (player1 === 6 && player2 === 0) {
        player2Win()
    } else if (player1 === 6 && player2 === 1) {
        player2Win()
    } else if (player1 === 6 && player2 ===2) {
        player2Win()
    } else if (player1 === 6 && player2 ===3) {
        player2Win()
    } else if (player1 === 6 && player2 ===4) {
        player2Win()
    } else if (player1 === 6 && player2 ===5) {
        player2Win()
    } else if (player1 === 6 && player2 ===6) {
        noWinner()
    } else if (player1 === 6 && player2 ===7) {
        player1Win()
    } else if (player1 === 6 && player2 ===8) {
        player1Win()
    } else if (player1 === 6 && player2 ===9) {
        player1Win()
    } else if (player1 === 6 && player2 ===10) {
        player1Win()
    } else if (player1 === 6 && player2 ===11) {
        player1Win()
    } else if (player1 === 6 && player2 ===12) {
        player1Win()
    } else if (player1 === 6 && player2 ===13) {
        player1Win()
    } else if (player1 === 6 && player2 ===14) {
        player2Win()
    } else if (player1 === 7 && player2 === 0) {
        player2Win()
    } else if (player1 === 7 && player2 === 1) {
        player2Win()
    } else if (player1 === 7 && player2 ===2) {
        player2Win()
    } else if (player1 === 7 && player2 ===3) {
        player2Win()
    } else if (player1 === 7 && player2 ===4) {
        player2Win()
    } else if (player1 === 7 && player2 ===5) {
        player2Win()
    } else if (player1 === 7 && player2 ===6) {
        player2Win()
    } else if (player1 === 7 && player2 ===7) {
        noWinner()
    } else if (player1 === 7 && player2 ===8) {
        player1Win()
    } else if (player1 === 7 && player2 ===9) {
        player1Win()
    } else if (player1 === 7 && player2 ===10) {
        player1Win()
    } else if (player1 === 7 && player2 ===11) {
        player1Win()
    } else if (player1 === 7 && player2 ===12) {
        player1Win()
    } else if (player1 === 7 && player2 ===13) {
        player1Win()
    } else if (player1 === 7 && player2 ===14) {
        player1Win()
    } else if (player1 === 8 && player2 === 0) {
        player1Win()
    } else if (player1 === 8 && player2 === 1) {
        player2Win()
    } else if (player1 === 8 && player2 ===2) {
        player2Win()
    } else if (player1 === 8 && player2 ===3) {
        player2Win()
    } else if (player1 === 8 && player2 ===4) {
        player2Win()
    } else if (player1 === 8 && player2 ===5) {
        player2Win()
    } else if (player1 === 8 && player2 ===6) {
        player2Win()
    } else if (player1 === 8 && player2 ===7) {
        player2Win()
    } else if (player1 === 8 && player2 ===8) {
        noWinner()
    } else if (player1 === 8 && player2 ===9) {
        player1Win()
    } else if (player1 === 8 && player2 ===10) {
        player1Win()
    } else if (player1 === 8 && player2 ===11) {
        player1Win()
    } else if (player1 === 8 && player2 ===12) {
        player1Win()
    } else if (player1 === 8 && player2 ===13) {
        player1Win()
    } else if (player1 === 8 && player2 ===14) {
        player1Win()
    } else if (player1 === 9 && player2 === 0) {
        player1Win()
    } else if (player1 === 9 && player2 === 1) {
        player1Win()
    } else if (player1 === 9 && player2 ===2) {
        player2Win()
    } else if (player1 === 9 && player2 ===3) {
        player2Win()
    } else if (player1 === 9 && player2 ===4) {
        player2Win()
    } else if (player1 === 9 && player2 ===5) {
        player2Win()
    } else if (player1 === 9 && player2 ===6) {
        player2Win()
    } else if (player1 === 9 && player2 ===7) {
        player2Win()
    } else if (player1 === 9 && player2 ===8) {
        player2Win()
    } else if (player1 === 9 && player2 ===9) {
        noWinner()
    } else if (player1 === 9 && player2 ===10) {
        player1Win()
    } else if (player1 === 9 && player2 ===11) {
        player1Win()
    } else if (player1 === 9 && player2 ===12) {
        player1Win()
    } else if (player1 === 9 && player2 ===13) {
        player1Win()
    } else if (player1 === 9 && player2 ===14) {
        player1Win()
    } else if (player1 === 10 && player2 === 0) {
        player1Win()
    } else if (player1 === 10 && player2 === 1) {
        player1Win()
    } else if (player1 === 10 && player2 ===2) {
        player1Win()
    } else if (player1 === 10 && player2 ===3) {
        player2Win()
    } else if (player1 === 10 && player2 ===4) {
        player2Win()
    } else if (player1 === 10 && player2 ===5) {
        player2Win()
    } else if (player1 === 10 && player2 ===6) {
        player2Win()
    } else if (player1 === 10 && player2 ===7) {
        player2Win()
    } else if (player1 === 10 && player2 ===8) {
        player2Win()
    } else if (player1 === 10 && player2 ===9) {
        player2Win()
    } else if (player1 === 10 && player2 ===10) {
        noWinner()
    } else if (player1 === 10 && player2 ===11) {
        player1Win()
    } else if (player1 === 10 && player2 ===12) {
        player1Win()
    } else if (player1 === 10 && player2 ===13) {
        player1Win()
    } else if (player1 === 10 && player2 ===14) {
        player1Win()
    } else if (player1 === 11 && player2 === 0) {
        player1Win()
    } else if (player1 === 11 && player2 === 1) {
        player1Win()
    } else if (player1 === 11 && player2 ===2) {
        player1Win()
    } else if (player1 === 11 && player2 ===3) {
        player1Win()
    } else if (player1 === 11 && player2 ===4) {
        player2Win()
    } else if (player1 === 11 && player2 ===5) {
        player2Win()
    } else if (player1 === 11 && player2 ===6) {
        player2Win()
    } else if (player1 === 11 && player2 ===7) {
        player2Win()
    } else if (player1 === 11 && player2 ===8) {
        player2Win()
    } else if (player1 === 11 && player2 ===9) {
        player2Win()
    } else if (player1 === 11 && player2 ===10) {
        player2Win()
    } else if (player1 === 11 && player2 ===11) {
        noWinner()
    } else if (player1 === 11 && player2 ===12) {
        player1Win()
    } else if (player1 === 11 && player2 ===13) {
        player1Win()
    } else if (player1 === 11 && player2 ===14) {
        player1Win()
    } else if (player1 === 12 && player2 === 0) {
        player1Win()
    } else if (player1 === 12 && player2 === 1) {
        player1Win()
    } else if (player1 === 12 && player2 ===2) {
        player1Win()
    } else if (player1 === 12 && player2 ===3) {
        player1Win()
    } else if (player1 === 12 && player2 ===4) {
        player1Win()
    } else if (player1 === 12 && player2 ===5) {
        player2Win()
    } else if (player1 === 12 && player2 ===6) {
        player2Win()
    } else if (player1 === 12 && player2 ===7) {
        player2Win()
    } else if (player1 === 12 && player2 ===8) {
        player2Win()
    } else if (player1 === 12 && player2 ===9) {
        player2Win()
    } else if (player1 === 12 && player2 ===10) {
        player2Win()
    } else if (player1 === 12 && player2 ===11) {
        player2Win()
    } else if (player1 === 12 && player2 ===12) {
        noWinner()
    } else if (player1 === 12 && player2 ===13) {
        player1Win()
    } else if (player1 === 12 && player2 ===14) {
        player1Win()
    } else if (player1 === 13 && player2 === 0) {
        player1Win()
    } else if (player1 === 13 && player2 === 1) {
        player1Win()
    } else if (player1 === 13 && player2 ===2) {
        player1Win()
    } else if (player1 === 13 && player2 ===3) {
        player1Win()
    } else if (player1 === 13 && player2 ===4) {
        player1Win()
    } else if (player1 === 13 && player2 ===5) {
        player1Win()
    } else if (player1 === 13 && player2 ===6) {
        player2Win()
    } else if (player1 === 13 && player2 ===7) {
        player2Win()
    } else if (player1 === 13 && player2 ===8) {
        player2Win()
    } else if (player1 === 13 && player2 ===9) {
        player2Win()
    } else if (player1 === 13 && player2 ===10) {
        player2Win()
    } else if (player1 === 13 && player2 ===11) {
        player2Win()
    } else if (player1 === 13 && player2 ===12) {
        player2Win()
    } else if (player1 === 13 && player2 ===13) {
        noWinner()
    } else if (player1 === 13 && player2 ===14) {
        player1Win()
    } else if (player1 === 14 && player2 === 0) {
        player1Win()
    } else if (player1 === 14 && player2 === 1) {
        player1Win()
    } else if (player1 === 14 && player2 ===2) {
        player1Win()
    } else if (player1 === 14 && player2 ===3) {
        player1Win()
    } else if (player1 === 14 && player2 ===4) {
        player1Win()
    } else if (player1 === 14 && player2 ===5) {
        player1Win()
    } else if (player1 === 14 && player2 ===6) {
        player1Win()
    } else if (player1 === 14 && player2 ===7) {
        player2Win()
    } else if (player1 === 14 && player2 ===8) {
        player2Win()
    } else if (player1 === 14 && player2 ===9) {
        player2Win()
    } else if (player1 === 14 && player2 ===10) {
        player2Win()
    } else if (player1 === 14 && player2 ===11) {
        player2Win()
    } else if (player1 === 14 && player2 ===12) {
        player2Win()
    } else if (player1 === 14 && player2 ===13) {
        player2Win()
    } else if (player1 === 14 && player2 ===14) {
        noWinner()
    }
}

