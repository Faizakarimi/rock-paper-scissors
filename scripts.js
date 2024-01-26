
let choices = ["rock", "scissor", "paper"];
let computer_choice;
let player_choice; //= prompt("choose your game");
let player_score = 0;
let computer_score = 0;
function getComputerChoice() {
    computer_choice = choices[Math.floor(Math.random() * choices.length)];
    //console.log(computer_choice);
    return computer_choice;

}


function playRound(player_choice, computer_choice) {

    // let player_score = 0;
    // let computer_score = 0;

    if (player_choice == computer_choice) {
        return ("it is a tie");
        player_score += 0;
        computer_score += 0;



    }
    else if ((player_choice == "rock" && computer_choice == "scissor")
        || (player_choice == "paper" && computer_choice == "rock")
        || (player_choice == "scissor" && computer_choice == "paper")) {
        player_score += 1;

        return ("You win! " + player_choice + " beats " + computer_choice);


    }
    else if ((computer_choice == "rock" && player_choice == "scissor")
        || (computer_choice == "paper" && player_choice == "rock")
        || (computer_choice == "scissor" && player_choice == "paper")) {
        return ("You Lose! " + computer_choice + " beats " + player_choice);
        computer_score += 1;

    }
    else {
        return ("invalid input!");

    }

 
    return player_score;







}



function game() {

    //call the roundPlay function 5 times. 
    //display result of each round by console.log
    //use prompt to get input from user. 

    for (let i = 0; i <= 5; i++) {
        //To have a case-insesitive input: 
        player_choice = prompt("what is your choice for the game?").toLowerCase();

        computer_choice = getComputerChoice();
        console.log(playRound(player_choice, computer_choice));


    }
    if(player_score > computer_score){
        console.log("Congrats!! You won the game. your score is:" + player_score);
    }
    else if(player_score==computer_score){
        console.log("Oops! Same Scores")
    }
    else{
        console.log("Computer won the game. the score is:"+ computer_score);
    }

    //console.log(player_score);


}


