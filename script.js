

// math.random between 0 and 1 and if value > .33 Rock, > .66, paper, > 1, scissors , assigns computer choice == Rock paper or Scissors
function getComputerChoice()
{
    newWord = ""
    randomNum = Math.random()
    if(randomNum <= .33)
    {
            randomNum = 0
    }
    else if(randomNum <= .66)
    {
            randomNum = 1
    }
    else
    {    
            randomNum = 2 
    }
    return randomNum
}

// prompt for user input and returns the human choice as a string
// function getHumanChoice()
// {
//     let word = ""
//     word = prompt("enter a Rock, Paper, or Scissors");
//     word = word.toUpperCase()
//     return word
// }









// if  user == computer choice, tie, else return relevant winner  
function playRound(humanChoice, ComputerChoice)
{

    if(humanChoice === ComputerChoice)
    {
        console.log("Its a tie")
         return "No winner"
    }
    
    if(humanChoice === 0 && ComputerChoice === 2)
    {
        console.log("You win")
        return "human win"
    }
    if(humanChoice === 0 && ComputerChoice === 1)
    {
        console.log("You lose to paper")
        return "computer win"
    }
    if(humanChoice === 1 && ComputerChoice === 2)
    {
        console.log("You Lose to scissors")
        return "computer win"
    }
    if(humanChoice === 1 && ComputerChoice === 0)
    {
        console.log("You win")
        return "human win"
    }
    if(humanChoice === 2 && ComputerChoice === 0)
    {
        console.log("You Lose to rock")
        return "computer win"
    }
    if(humanChoice === 2 && ComputerChoice === 1)
    {
        console.log("You win")
         return "human win"
    }
}

var HScore = 0
var CScore = 0

// while loops five times over playround() and increment score according playRound results
function playGame(number)
{

    
            const computerSelection = getComputerChoice();

            words = (playRound(number, computerSelection))           
                if(words === "human win")
            {
                    HScore ++
            }
            else if (words === "No winner")
            {
                console.log("") 
            }
            else
            {
                    CScore ++
            }
var declareWinner = ""
if(CScore === 5)
{
    declareWinner = "Computer Winner! "
    
}
    else if(HScore === 5)
    {
        declareWinner = "You Win! "
    }
    else{
        declareWinner = ""
    }
    
    const p_select = document.querySelector("p");
    p_select.textContent = declareWinner + "Your Score: " + HScore + " computer Score: " + CScore
    if(CScore === 5 || HScore === 5)
    {
        CScore = 0
        HScore = 0
    }
}



// playGame()