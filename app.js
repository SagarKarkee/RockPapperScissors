let userScore = 0;
let compScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userPoint = document.getElementById("user-score");
const compPoint = document.getElementById("comp-score");
const drawPoint = document.getElementById("draw-score");
const btn = document.getElementById("btn")

const restartGame = () => {
    userScore = 0;
    compScore = 0;
    drawScore = 0;
    userPoint.textContent = 0;
    compPoint.textContent = 0;
    drawPoint.textContent = 0;
    msg.textContent = "Play Your Move";
    msg.style.backgroundColor = " rgb(205, 192, 175)";
    msg.style.color = "black";
}

// show winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        // console.log("you win")
        userScore++;
        userPoint.innerText = userScore;
        msg.innerText = `You Win!, Your Choice ${userChoice} beats Computer's Choice ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";


    } else {
        // console.log("you lose")
        compScore++;
        compPoint.innerText = compScore;
        msg.innerText = `You Lose! Computer's Choice ${compChoice} beats Your Choice ${userChoice}`;
        msg.style.backgroundColor = "blue";
        msg.style.color = "white";

    }
}

//draw condition function
const draw = () => {
    drawScore++;
    drawPoint.innerText = drawScore;
    // console.log("the game is draw")
    msg.innerText = "The Game was Draw, Play Again!";
    msg.style.backgroundColor = "rgb(205, 192, 175)";
    msg.style.color = "black";

}

const compGame = () => {
    const options = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * 3);// Math.ramdom()*3 can generate any random number include the decimal number.
    // math.floor can remove the decimal number and get the integer number.
    return options[random];
}

// main play function

const playGame = (userChoice) => {
    // console.log("user Choice = ", userChoice);


    // for computer choice
    const compChoice = compGame();
    // console.log("computer Choice = ", compChoice);

    // Draw condition
    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // paper, scissors
            userWin = compChoice === "paper" ? false : true;
        } else {
            if (userChoice === "paper") {
                // rock, scissors
                userWin = compChoice === "scissors" ? false : true;
            } else {
                // paper, rock
                userWin = compChoice === "rock" ? false : true;
            }
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("the choice is " , choiceID);
        playGame(userChoice);
    });
})

btn.addEventListener("click", restartGame);