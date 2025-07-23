let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msj=document.querySelector("#msj");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genComputerChoice=()=>{
    const options = ["rock","paper","scissors"];
   const randIdx = Math.floor(Math.random() *3);
   return options[randIdx];
};
const drawGame = ()=>{
    msj.innerText = "game was Draw play again";
    msj.style.backgroundcolor="#081b31";
};
const showWinner=(userWin , userChoice , compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText= userScore;
        msj.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msj.style.backgroundcolor ="green";
    } else {
        compScore++;
        compScorePara.innerText= compScore;
        msj.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
        msj.style.backgroundcolor ="red";  
    }
};
const playGame=(userChoice)=>{
     console.log("userchoice = ",userChoice);
     const compChoice = genComputerChoice();
     console.log("compchoice = ",compChoice);
     if(userChoice===compChoice){
        drawGame();
     } else{
        let userWin = true;
        if(userChoice=== "rock") {
            //scissors,paper
            userWin= compChoice==="paper"? false : true;
        } else if(userChoice==="paper") {
            //rock,scissors
            userWin=compChoice==="scissors"? false : true;
        } else {
            //rock,paper
           userWin= compChoice==="rock" ? false : true;
        }
         showWinner(userWin , userChoice, compChoice);  
     }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
    //   console.log("Choice was clicked by user" , userChoice);
      playGame(userChoice);
    });
});