const history = []; // Array to hold visited paragraph elements

const sceneTitleId = "scene-title";
const storyTextId = "story-text";
const playerStatusId = "player-status";
const formId = "player-form";
const next = {
	value: "",
};
const branch = {
	hasChoice: false,
	c1: '',
	c2: ''
};

// get Element objects
const startBtnEl = document.getElementById("start-btn")
const sceneTitleEl = document.getElementById(sceneTitleId);
const storyTextEl = document.getElementById(storyTextId);
const playerStatusEl = document.getElementById(playerStatusId);
const formEl = document.forms[0];
const choiceBtnArr = Array.from(document.getElementsByClassName("choice-btn"));

// Create player object

const player = new Player();

function startGame() {
	if (event) event.preventDefault();
	player.name = document.getElementById("player-name").value;
	player.gender = document.getElementById("player-gender").value;
	document.cookie = `userName=${player.name}&charGender=${player.gender}`
	// Hide form
	formEl.style.display = "none";
	// Show choice buttons
	choiceBtnArr.forEach(function (el) {el.style.display = "flex";});
	// TODO: Make this dissolve away.
	changeScene("Between the Interpolated", "", "", branch)
	branch.hasChoice = true;
	branch.c1 = "Yes"
	branch.c2 = "No"
	changeScene(
				"The flickering blue light is hypnotic. Red and yellow " +
				"pixelated letter throb and ask a simple question: ",
		// Way to make this one a new line without using innerHTML?
				"DO YOU WANT TO DOWNLOAD DEMIURGE.EXE?",
				"Curious",
				branch);
}

// instead of separate arguments for btn text and branches bool, pass obj?
function changeScene(title, text, pStatus, branches=branch) {
	sceneTitleEl.innerText = title;
	storyTextEl.innerText = text;
	playerStatusEl.innerText = pStatus;

	// Add event listeners to the buttons so we know how to proceed
	if (branch.hasChoice) {
		choiceBtnArr[0].innerText = branch.c1;
		choiceBtnArr[1].innerText = branch.c2;
		choiceBtnArr.forEach(function getChoice(el) {
			el.addEventListener("click", function (event) {
				next.value  = event.currentTarget;
				// TODO: delete debug print statements
				if (next.value.id === "choice-2-btn") {
					location.href = "computer-explodes.html";
				}
			})
		})
	}
	return next
}

/*
				changeScene("You thought this was a game?",
					"The computer exploded violently. All that was left was an unpleasant smell.",
					"Current status: crispy",
					false)
*/
function getText(element) {
	return element.childNodes[0].textContent
}


// Only have to fill out form once.
let cookies = document.cookie.split("&");
for (let c of cookies) {
	let cName, cValue;
	[cName, cValue] = c.split("=");
	if (cName === "userName") {
		startGame();
	}
}

if (startBtnEl) startBtnEl.addEventListener("click", (event) => {startGame;});

