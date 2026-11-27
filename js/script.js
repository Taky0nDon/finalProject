// Game loop won't start until all scripts and other assets are loaded.
window.addEventListener('load', function () {
	let cookies = document.cookie.split("&");
	for (let c of cookies) {
		let cName, cValue;
		[cName, cValue] = c.split("=");
		// Only have to fill out form once.
		if (cName === "userName") {
			startGame();
		}
	}

	if (startBtnEl) {
		startBtnEl.addEventListener("click",
		function (event) {event.preventDefault; startGame();});
	}
});

// TODO: Write functions for each room and control flow that way?
const history = []; // Array to hold visited paragraph elements

const sceneTitleId = "scene-title";
const storyTextId = "story-text";
const playerStatusId = "player-status";
const formId = "player-form";
const next = {
	value: "",
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
	console.log("DEBUG: startGame");
	player.name = document.getElementById("player-name").value;
	player.gender = document.getElementById("player-gender").value;
	if (!document.cookie) {
		document.cookie = `userName=${player.name}&charGender=${player.gender}`;
	}
	// Hide form
	formEl.style.display = "none";
	// Show choice buttons
	choiceBtnArr.forEach(function (el) {el.style.display = "flex";});
	// TODO: Make this dissolve away.
	changeScene(rooms["title"])
		// Way to make this one a new line without using innerHTML?
	changeScene(rooms[0]);
}

// instead of separate arguments for btn text and branches bool, pass obj?
function changeScene(room) {
	console.log(`DEBUG: room: ${room.title}`);
	sceneTitleEl.innerText = room.title;
	storyTextEl.innerText = room.text;
	playerStatusEl.innerText = room.pStatus;

	// Add event listeners to the buttons so we know how to proceed
	if (room.branch) {
		// DEBUG
		console.log(`room: ${room.title}, branch: ${room.branch}`);
		showChoiceButtons(choiceBtnArr);
		choiceBtnArr[0].innerText = room.branch.yes[0];
		choiceBtnArr[1].innerText = room.branch.no[0];
		choiceBtnArr.forEach(function getChoice(el) {
			el.addEventListener("click", (event) => {
				makeChoice(room.branch.yes[1], room.branch.no[1]);});
		})
	}
	else {
		hideChoiceButtons(choiceBtnArr);
	}
	return next
}

/*
				changeScene("You thought this was a game?",
					"The computer exploded violently. All that was left was an unpleasant smell.",
					"Current status: crispy",
					false)
*/

