function hideChoiceButtons(buttonArray) {
	buttonArray.forEach( (el) => { el.style.display = "none"; });
}

function showChoiceButtons(buttonArray) {
	buttonArray.forEach( (el) => { el.style.display = "flex"; });
}
function enterChamber() {
	console.log("You are in the chamber");
	changeScene(rooms.y0);
}

function computerExplodes() {
	console.log("The computer exploded.");
	changeScene(rooms.n0);
	choiceBtnArr[0].style.display = "flex";
	choiceBtnArr[0].textContent = "Start Over";
	choiceBtnArr[0].removeEventListener("click", makeChoice); 
	choiceBtnArr[0].addEventListener("click", () => {
		changeScene(rooms.title)
		setTimeout(changeScene, 3000, rooms[0]);
	});
}

function makeChoice(choice1, choice2) {
	next.value  = event.currentTarget;
	// TODO: delete debug print statements
	if (next.value.id === "choice-1-btn") {
		choice1();
	}
	else if (next.value.id === "choice-2-btn") {
		choice2();
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
	console.log("Spiral");
}
