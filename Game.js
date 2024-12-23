
   let userScore = 0;
   let computerScore = 0;

   const choices = document.querySelectorAll(".choice");
   const msg = document.querySelector("#msg");

   const userScorePara = document.querySelector("#user-score");
   const computerScorePara = document.querySelector("#computer-score");

   const gencomputerChoice = () => {                  
        const  options = ["rock","paper","scissors"];
        const randIdx = Math.floor(Math.random() *3);
        return options [randIdx];
         //rock,paper,scissors
   };

    
   const drawGame = () =>{
        msg.innerText = "Game was Draw. Play again";
        msg.style.backgroundcolor = "#081b31";
   };

     const showWinner = (userWin , usserChoice, computerChoice) => {
        if (userWin) {
            userScore++;
             userScorePara.innerText = userScore;
             msg.innerText = `You win! Your $ {userChoice} beats $(computerChoice)`;
             msg.Style.backgroundcolor = "green";
        }
         else {
            computerScore++;
            computerScorePara.innerText = computerScore;
             msg.innerText = `You lost.  $ {computerChoice} beats $(userChoice)`;
             msg.style.backgroundcolor = "red";
        
         }
     };


   const playGame = (userChoice) => {
            console.log("user choice = ", userChoice);
            // Generate computer choice --> Modulur programe
            const computerChoice = gencomputerChoice();
            console.log("computerchoice = ", computerChoice);

     if(userChoice === computerChoice){
        // draw game
            drawGame();
     }
       else{
            let userWin = true;
            if (userChoice ==="rock"){
                  // scissors , paper
                  userWin = computerChoice ==="paper"?  false : true;
            }
              else if(userChoice === "paper") {
                       // rock , scissors
               userWin = computerChoice === "scissors" ? false : true;
              } 
            else {
                  // rock , paper
            userWin = computerChoice === "rock"? false : true ;
            }
             showWinner(userWin);
       }
  };

     choices.forEach((choice) => {                        
//            console.log(choice);
           choice.addEventListener("click", () => {
                    const userChoice = choice.getAttribute("id");
//                  console.log("choice was clicked", userChoice);
                 playGame(userChoice);
           });
     });




























































































































































