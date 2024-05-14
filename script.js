

// math.random between 0 and 1 and if value > .33 Rock, > .66, paper, > 1, scissors , assigns computer choice == Rock paper or Scissors
function getComputerChoice()
{
    newWord = ""
    randomNum = Math.random()
    if(randomNum <= .33)
    {
            newWord = "Rock"
    }
    else if(randomNum <= .66)
    {
            newWord = "Paper"
    }
    else
    {    
            newWord = "Scissors" 
    }
    return newWord.toUpperCase()
}

// prompt for user input and returns the human choice as a string
function getHumanChoice()
{
    let word = ""
    word = prompt("enter a Rock, Paper, or Scissors");
    word = word.toUpperCase()
    return word
}


// if  user == computer choice, tie, else return relevant winner  
function playRound(humanChoice, ComputerChoice)
{

    if(humanChoice === ComputerChoice)
    {
        console.log("Its a tie")
         return "No winner"
    }
    if(humanChoice === "ROCK" && ComputerChoice === "SCISSORS")
    {
        console.log("You win")
        return "human win"
    }
    if(humanChoice === "ROCK" && ComputerChoice === "PAPER")
    {
        console.log("You lose 1 ")
        return "computer win"
    }
    if(humanChoice === "PAPER" && ComputerChoice === "SCISSORS")
    {
        console.log("You Lose 3 ")
        return "computer win"
    }
    if(humanChoice === "PAPER" && ComputerChoice === "ROCK")
    {
        console.log("You win")
        return "human win"
    }
    if(humanChoice === "SCISSORS" && ComputerChoice === "ROCK")
    {
        console.log("You Lose 2 ")
        return "computer win"
    }
    if(humanChoice === "SCISSORS" && ComputerChoice === "PAPER")
    {
        console.log("You win")
         return "human win"
    }
}


// while loops five times over playround() and increment score according playRound results
function playGame()
{
    HScore = 0
    CScore = 0
    control = 0
    while(control < 5)
        {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();

            words = (playRound(humanSelection, computerSelection))           
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

            control ++ 
        }
    console.log("Human Score: " + HScore + " computer Score: " + CScore )
}




playGame()