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
	setTimeout(changeScene, 2000, rooms[0]);
		// Way to make this one a new line without using innerHTML?
	
}

// instead of separate arguments for btn text and branches bool, pass obj?
function changeScene(room) {
	choiceBtnArr.splice(0, choiceBtnArr.length, ...choiceBtnArr.filter((e) => e !== undefined));
	// TODO: Should I just create new buttons every time instead
	// of trying to manage event listeners?
	sceneTitleEl.innerText = room.title;
	storyTextEl.innerText = room.text;
	playerStatusEl.innerText = room.pStatus;

	let choices = [];
	deleteChoiceButtons(choiceBtnArr);
	// Add event listeners to the buttons so we know how to proceed
	if (room.branches) {
		// DEBUG
		for (let branch in room.branches){
			console.log(Object.keys(room.branches[branch]));
			console.log(Object.values(room.branches[branch]));
			if (!room.branches.hasOwnProperty(branch)) continue;
			let fn = room.branches[branch][1]
			console.log(`DEBUG: Putting function ${fn} in choices arr`);
			choices.push(fn);
			newButton = document.createElement("button");
			newButton.type = "button"
			newButton.id = `choice-${choices.length}-btn`;
			newButton.class = "choice-btn";
			newButton.innerText = room.branches[branch][0];
			choiceBtnArr.push(newButton);
			document.getElementById("button-group").appendChild(newButton);
		}
	}
	
	choiceBtnArr.forEach(function getChoice(el) {
		el.addEventListener("click", (event) => {
			makeChoice(choices);
		});
	})

	showChoiceButtons(choiceBtnArr);
}

/*
				changeScene("You thought this was a game?",
					"The computer exploded violently. All that was left was an unpleasant smell.",
					"Current status: crispy",
					false)
*/

