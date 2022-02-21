let game = document.querySelector(".game");

let row = 3;
let col = 3;

let player1 = "X";
let player2 = "O";
let currentPlayer = player1;
let gameOver = false;
let win = false;
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

function createBoxes() {
	for (let i = 0; i < row * col; i++) {
		let box = document.createElement("div");
		box.classList.add("box");
		game.appendChild(box);
	}
}



createBoxes();
