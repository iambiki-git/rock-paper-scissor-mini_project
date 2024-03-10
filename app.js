let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score"); 
const compScorePara = document.querySelector("#comp-score"); 

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    // console.log("Game was draw.");
    msg.innerText = `Game was draw.${drawEmoji} Play again.`;
    msg.style.backgroundColor = "#081b31";
};

const happyEmoji = "😃";
const sadEmoji = "😢";
const drawEmoji = "😐";


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore ++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!${happyEmoji} Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        msg.innerText = `You Lost.${sadEmoji} ${compChoice} beats your ${userChoice}`;
        compScore ++;
        compScorePara.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    // console.log("comp choice = ", compChoice);

    if(userChoice == compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice == "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true; 
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});