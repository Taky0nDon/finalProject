function createButton(idNum) {
	newButton = document.createElement("button");
	newButton.type = "button"
	newButton.id = `choice-${idNum}-btn`;
	newButton.class = "choice-btn";
	return newButton;
}

function deleteChoiceButtons(buttonArray) {
	buttonArray.forEach( (b) => b.remove() );
}

function hideChoiceButtons(buttonArray) {
	buttonArray.forEach( (el) => { el.style.display = "none"; });
}

function showChoiceButtons(buttonArray) {
	buttonArray.forEach( (el) => { el.style.display = "flex"; });
}

function enterChamber() {
	changeScene(rooms.y0);
}

function backToTitle() {
	changeScene(rooms.title)
	setTimeout(changeScene, 3000, rooms[0]);
}

function computerExplodes() {
	changeScene(rooms.n0);
	choiceBtnArr[0].style.display = "flex";
	choiceBtnArr[0].textContent = "Start Over";
	choiceBtnArr[0].addEventListener("click", backToTitle);
}

function makeChoice(choices) {
	console.log(`DEBUG: choices ${choices}`)
	next.value  = event.currentTarget;
	// TODO: delete debug print statements
	for (let i = 0; i < choiceBtnArr.length; i++) {
		let currentId = `choice-${i+1}-btn`
		if (next.value.id === currentId) {
			console.log(`DEBUG: should be executing ${choices[i]}`)
			choices[i]();
		}
	}
}

function resetEventListener(element) {
	element.removeEventListener("click", makeChoice); 
}

function choseEye() {
	console.log("eye");
}

function choseQuestionMark() {
	console.log("?");
}

function choseSkull() {
	console.log("skull");
}

function choseSpiral() {
	console.log(`DEBUG: spiral`);
	changeScene(rooms.spiralStart);
}

function inspectGlitch() {
}

function keepRunning() {
	// Remove spiral key (can't travel down same path twice)
	delete symbols.spiral;
	// Update branches property
	rooms.spiralRun.branches = symbols;
	console.log(`DEBUG: spiral run`);
	changeScene(rooms.spiralRun);
}
