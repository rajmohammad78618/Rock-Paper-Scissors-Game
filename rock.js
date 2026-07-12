


const rock = document.querySelector(".first");
const paper = document.querySelector(".second");
const scissors = document.querySelector(".third");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");
const msg = document.querySelector("#msg");

let userScore = 0;
let computerScore = 0;

// Computer ki random choice
const compChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Draw
const drawGame = () => {
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "#444";
};

// Winner show
const showWinner = (userWin, userChoice, computerChoice) => {

    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `Computer Won! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// Game Logic
const playGame = (userChoice) => {

    const computerChoice = compChoice();

    if (userChoice === computerChoice) {
        drawGame();
        return;
    }

    let userWin = true;

    if (userChoice === "Rock") {
        userWin = computerChoice === "Paper" ? false : true;
    }

    else if (userChoice === "Paper") {
        userWin = computerChoice === "Scissors" ? false : true;
    }

    else {
        userWin = computerChoice === "Rock" ? false : true;
    }

    showWinner(userWin, userChoice, computerChoice);
};

// Events
rock.addEventListener("click", () => {
    playGame("Rock");
});

paper.addEventListener("click", () => {
    playGame("Paper");
});

scissors.addEventListener("click", () => {
    playGame("Scissors");
});