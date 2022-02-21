let game = document.querySelector(".game");

let row = 3;
let col = 3;

let player1 = "X";
let player2 = "O";
let currentPlayer = player1;
let gameOver = false;
let win = false;

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
let currentGameState = {};

// Setting box states with data-num attribute
function setGameState() {
	let boxes = document.querySelectorAll(".box");
	boxes.forEach((box) => {
		let att = box.attributes.getNamedItem("data-num").nodeValue;
		let value = box.textContent;
		currentGameState[att] = value;
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

function handleClik() {
	let boxes = document.querySelectorAll(".box");
	boxes.forEach((box, index) => {
		box.addEventListener("click", (e) => {
			if (gameOver === false) {
				if (currentPlayer === player1) {
					if (!currentGameState[index]) {
						console.log("dolu degil");
						box.textContent = player1;
						changeCurrentPlayer();
						setGameState();
						console.log(currentGameState);
					}
				} else if (currentPlayer === player2) {
					if (!currentGameState[index]) {
						box.textContent = player2;
						changeCurrentPlayer();
						setGameState();
						console.log(currentGameState);
					}
				}
			}
		});
	});
}

function play() {
	createBoxes(row, col, game);
	handleClik();
}

play();
