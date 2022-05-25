/*
Let's play a classic game of rock, paper, scissors!

Write a program called 'rock-paper-scissors.js' that takes in two inputs in a row for Player 1 and Player 2.

The players can only input "rock", "paper", and "scissors". Anything else should result in a failure message getting logged to the screen. After both players input their options, use console.log() to print the player who emerged victorious.

For those who are unfamiliar, rock beats scissors, scissors beats paper, and paper beats rock. If both players input the same answer, it should result in a draw.
*/

const prompt = require("prompt-sync")({sigint: true});

let p1 = prompt("Player 1, enter 'rock', 'paper' or 'scissors': ");
let p2 = prompt("Player 1, enter 'rock', 'paper' or 'scissors': ");


if ((p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock')){
    console.log("Player 1 wins!");
} else if ((p2 === 'rock' && p1 === 'scissors') || (p2 === 'scissors' && p1 === 'paper') || (p2 === 'paper' && p1 === 'rock')){
    console.log("Player 2 wins!");
} else if ((p1 === 'rock' && p2 === 'rock') || (p1 === 'paper' && p2 === 'paper') || (p1 === 'scissors' && p2 === 'scissors')){
    console.log("Draw!");
}else{
    console.log("You blew it again!")
}
