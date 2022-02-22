// Using strict mode to write more secure code
"use strict";

let game = document.querySelector("#game");
let player = document.querySelector("#player");
let resBtn = document.querySelector("#restart");

let row = 3;
let col = 3;

let player1 = "X";
let player2 = "O";
let currentPlayer = player1;
let gameOver = false;
let winner = "";

// Winning Combinations
let winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
// Initilaze game state object
let gameState = {};

/**
 * @param  {Number} row Number of row
 * @param  {Number} col Number of column
 * @param  {HTMLElement} parent Parent element of boxes, boxes gonna be inside this element
 * @description creates boxes for tic tac toe game
 */
function createBoxes(row, col, parent) {
	for (let i = 0; i < row * col; i++) {
		let box = document.createElement("div");
		box.classList.add("box");
		parent.appendChild(box);
		let dataNum = document.createAttribute("data-num");
		dataNum.value = `${i}`;
		box.setAttributeNode(dataNum);
	}
}
// Setting box states with data-num attribute
function setGameState() {
	let boxes = document.querySelectorAll(".box");
	boxes.forEach((box) => {
		let att = box.attributes.getNamedItem("data-num").nodeValue;
		let value = box.textContent;
		gameState[att] = value;
	});
}
// Changing current player
function changeCurrentPlayer() {
	currentPlayer === player1
		? (currentPlayer = player2)
		: (currentPlayer = player1);
}
// Using Canvas Confetti library to make a fireworks
function fireworks() {
	var duration = 3 * 1000;
	var animationEnd = Date.now() + duration;
	var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

	function randomInRange(min, max) {
		return Math.random() * (max - min) + min;
	}
	var interval = setInterval(function () {
		var timeLeft = animationEnd - Date.now();

		if (timeLeft <= 0) {
			return clearInterval(interval);
		}

		var particleCount = 50 * (timeLeft / duration);
		// since particles fall down, start a bit higher than random
		confetti(
			Object.assign({}, defaults, {
				particleCount,
				origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
			})
		);
		confetti(
			Object.assign({}, defaults, {
				particleCount,
				origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
			})
		);
	}, 250);
}
// Checking gameState to is there any winner
function checkWinner() {
	winCombos.forEach((combo, index) => {
		if (gameState[combo[0]] && gameState[combo[1]] && gameState[combo[2]]) {
			if (
				gameState[combo[0]] === gameState[combo[1]] &&
				gameState[combo[1]] === gameState[combo[2]] &&
				gameState[combo[0]] === gameState[combo[2]]
			) {
				console.log(
					gameState[combo[0]],
					gameState[combo[1]],
					gameState[combo[2]]
				);
				gameOver = true;
				winner = gameState[combo[0]];
				player.textContent = `Player ${winner} is won!`;
				resBtn.style.display = "block";
				resBtn.addEventListener("click", restart);
				fireworks();
			}
		}
	});
}
// Restarting the game, clearing all values
function restart() {
	gameState = {};
	gameOver = false;
	winner = "";
	document.querySelectorAll(".box").forEach((box, index) => {
		box.textContent = "";
	});
	player.textContent = `Current Player: ${currentPlayer}`;
	resBtn.style.display = "none";
}

function handleBoxClick() {
	let boxes = document.querySelectorAll(".box");
	boxes.forEach((box, index) => {
		box.addEventListener("click", (e) => {
			if (gameOver === false) {
				if (currentPlayer === player1) {
					if (!gameState[index]) {
						box.textContent = player1;
						changeCurrentPlayer();
						player.textContent = `Current Player: ${currentPlayer}`;
						setGameState();
						checkWinner();
						console.log(gameState);
					}
				} else if (currentPlayer === player2) {
					if (!gameState[index]) {
						box.textContent = player2;
						changeCurrentPlayer();
						player.textContent = `Current Player: ${currentPlayer}`;
						setGameState();
						checkWinner();
						console.log(gameState);
					}
				}
			}
		});
	});
}
function play() {
	player.textContent = `Current Player: ${currentPlayer}`;
	createBoxes(row, col, game);
	handleBoxClick();
}
play();
