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

/**
 * @param  {Number} row Number of row
 * @param  {Number} col Number of column
 * @param  {HTMLElement} parent Parent element of boxes, boxes gonna be inside this element
 * @description creates boxes for tic tac toe game
 */
function createBoxes(row,col,parent) {
	for (let i = 0; i < row * col; i++) {
		let box = document.createElement("div");
		box.classList.add("box");
		parent.appendChild(box);
	}
}

function changeCurrentPlayer() {
	currentPlayer === player1
		? (currentPlayer = player2)
		: (currentPlayer = player1);
}

function handleClik() {
	let boxes = document.querySelectorAll(".box");
	boxes.forEach((box) => {
		box.addEventListener("click", (e) => {
			if (gameOver === false) {
				if (currentPlayer === player1) {
					box.textContent = player1;
					console.log(box.textContent);
          changeCurrentPlayer();
				} else {
					box.textContent = player2;
					console.log(box.textContent);
          changeCurrentPlayer();
				}
			}
		});
	});
}

function play() {
	createBoxes(row,col,game);
	handleClik();
}

play();
