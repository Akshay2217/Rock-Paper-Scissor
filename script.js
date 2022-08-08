
  // Rock Paper Scissors 


    const TotalScore = {playerScore: 0, computerScore: 0}
   
   // ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
   
function getComputerChoice() {
  
 let rpsChoice = ['Rock', 'Paper', 'Scissors']
 let computerChoice = rpsChoice[Math.floor(Math.random() * 3)]
  return computerChoice
  
}



// ** getResult compares playerChoice & computerChoice and returns the score accordingly **

function getResult(playerChoice,computerChoice) {
  // return the result of score based on if you won, drew, or lost
    
  let score
  
  // All situations where human draws, set `score` to 0
  if(playerChoice == computerChoice){
    score = 0
    // All situations where human wins, set `score` to 1
    // make sure to use else ifs here
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  }
   else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  }
   else if (playerChoice == 'Scissors' && computerChoice == 'Paper'){
    score = 1
  } else {
    score = -1
  }
  
  
  // Otherwise human loses (aka set score to -1)
  
  
  return score
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  const resultDiv = document.getElementById('result')
  const handDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  if(score == -1){
  resultDiv.innerText = 'You Loose!'
  }
  else if(score == 0){
    resultDiv.innerText = 'You Tie!'
  }
  else {
    resultDiv.innerText = 'You Won!'
  }
  handDiv.innerText = `${playerChoice} VS ${computerChoice}`
  playerScoreDiv.innerText = `Your Score: ${TotalScore['playerScore']}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
 const computerChoice = getComputerChoice();
 const score = getResult(playerChoice, computerChoice)
 TotalScore['playerScore'] += score


showResult(score, playerChoice, computerChoice)}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsButton')
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })

 

  const  endGameButton = document.getElementById('endGameButton');
  // Add a click listener to the end game button that runs the endGame() function on click
  endGameButton.onclick = () => {
    endGame()
  }
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  TotalScore['playerScore'] = 0;
  TotalScore['computerScore'] = 0;
  const resultDiv = document.getElementById('result');
  const handDiv = document.getElementById('hands');
  const playerScoreDiv = document.getElementById('player-score');

   handDiv.innerText = ' ';
   resultDiv.innerText = ' ';
   playerScoreDiv.innerText = ' ';


  
}

playGame()