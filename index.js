const p1 = {
	score: 0,
	display: document.querySelector("#player-one-score"),
	button: document.querySelector("#add-score-player-one"),
};
const p2 = {
	score: 0,
	display: document.querySelector("#player-two-score"),
	button: document.querySelector("#add-score-player-two"),
};

const resetButton = document.querySelector("#reset");

const input = document.querySelector("#score");

let isGameOver = false;

let winningScore;

input.addEventListener("change", function () {
	winningScore = parseInt(this.value);
});

p1.button.addEventListener("click", function () {
	if (!isGameOver) {
		p1.score++;
		p1.display.textContent = p1.score;
		if (p1.score === winningScore) {
			updateStyles(p1, p2);
		}
	}
});

p2.button.addEventListener("click", function () {
	if (!isGameOver) {
		p2.score++;
		p2.display.textContent = p2.score;
		if (p2.score === winningScore) {
			updateStyles(p2, p1);
		}
	}
});

resetButton.addEventListener("click", function () {
	p1.score = 0;
	p2.score = 0;
	p1.display.textContent = p1.score;
	p2.display.textContent = p2.score;
	isGameOver = false;
	p1.display.style.color = "black";
	p2.display.style.color = "black";
	p1.button.disabled = false;
	p2.button.disabled = false;
	p1.button.style.opacity = "1";
	p2.button.style.opacity = "1";
	input.value = "";
});

function updateStyles(winner, loser) {
	winner.display.style.color = "rgb(38, 165, 38)";
	loser.display.style.color = "rgb(231, 42, 42)";
	isGameOver = true;
	winner.button.disabled = true;
	loser.button.disabled = true;
	winner.button.style.opacity = "0.5";
	loser.button.style.opacity = "0.5";
}
