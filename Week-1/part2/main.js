let game = document.querySelector(".game");
let player = document.querySelector(".player");

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

// Setting box states with data-num attribute
function setGameState() {
	let boxes = document.querySelectorAll(".box");
	boxes.forEach((box) => {
		let att = box.attributes.getNamedItem("data-num").nodeValue;
		let value = box.textContent;
		gameState[att] = value;
	});
}

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

function changeCurrentPlayer() {
	currentPlayer === player1
		? (currentPlayer = player2)
		: (currentPlayer = player1);
}

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
				player.textContent = `${winner} is won!`;
			}
		}
	});
}


function playGame() {
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
	playGame();
}

play();
