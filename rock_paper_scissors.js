/*
Let's play a classic game of rock, paper, scissors!

Write a program called 'rock-paper-scissors.js' that takes in two inputs in a row for Player 1 and Player 2.

The players can only input "rock", "paper", and "scissors". Anything else should result in a failure message getting logged to the screen. After both players input their options, use console.log() to print the player who emerged victorious.

For those who are unfamiliar, rock beats scissors, scissors beats paper, and paper beats rock. If both players input the same answer, it should result in a draw.
*/

const prompt = require("prompt-sync")({sigint: true});

let p1p = prompt("Player 1, enter 'rock', 'paper' or 'scissors': ");
let p2p = prompt("Player 1, enter 'rock', 'paper' or 'scissors': ");
let p1 = p1p.toLowerCase()
let p2 = p2p.toLowerCase()

let r = 'rock'
let p = 'paper'
let s = 'scissors'

if ((p1 === r && p2 === s) || (p1 === s && p2 === p) || (p1 === p && p2 === r)){
    console.log("Player 1 wins!");
} else if ((p2 === r && p1 === s) || (p2 === s && p1 === p) || (p2 === p && p1 === r)){
    console.log("Player 2 wins!");
} else if ((p1 === r && p2 === r) || (p1 === p && p2 === p) || (p1 === s && p2 === s)){
    console.log("Draw!");
} else{
    console.log("You blew it again!")
}
