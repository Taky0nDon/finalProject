let symbols = {
			eye: ["Glowing eye", choseEye],
			questionMark: ["Shimmering question mark", choseQuestionMark],
			skull: ["Throbbing Skull", choseSkull],
			spiral: ["Spinning spiral", choseSpiral],
}

const rooms = {
	title: {
		title: "Between the Interpolated",
		text: "",
		pStatus: "",
		branches: false,
	},
	0: {
		title: "The flickering blue light is hypnotic. Red and pixelated letters throb and ask a simple question: ", 
		text: "DO YOU WANT TO DOWNLOAD DEMIURGE.EXE?",
		pStatus: "Curious",
		branches: {
			yes: ["Yes", enterChamber],
			no: ["No", computerExplodes]
		}
	},
	y0: {
		title: "The Chamber of Choice",
		text: [
			"Your webcam turns on and you stare at your own confused face. But something isn't right. Things are changing. The bare walls of your meager dwelling transform into massive stone blocks."
		],
		pStatus: "Alarmed",
		branches: {
			...symbols
		},
	},
	n0: {
		title: "Did you think this was a game?",
		text: "Your computer exploded, leaving nothing but charred walls and an unpleasant aroma.",
		pStatus: "Crispy",
		branches: {
			gameOver: ["Start Over", backToTitle]
		}
	},
	eyeStart: {
		title: "",
		text: "",
		pStatus: "",
		branches: {
		},
	},
	qmStart: {
		title: "",
		text: "",
		pStatus: "",
		branches: {
		},
	},
	skullStart: {
		title: "",
		text: "",
		pStatus: "",
		branches: {
		},
	},
	spiralStart: {
		title: "The Endless Hallway",
		text: "You ran. And ran. And ran. The jagged, damp stones never changed. Wait, what was that? You retrace your steps, not sure if you even saw anything. Maybe that's for the best, you think, just before a stone in the center of your field of vision... flickers?",
		pStatus: "Sweaty",
		branches: {
			inspect: ["Inspect the strange phenomenon", inspectGlitch],
			keepRunning: ["Keep running.", keepRunning],
		},
	},
	spiralRun: {
		title: "Back to Where It All Began",
		text: "You find yourself back in the strange room with the symbols on the walls. The only difference is now, you have one fewer from which to choose.",
		pStatus: "Exasperated",
		// TODO: Figure out how to alter # of symbols.
		branches: {
			...symbols,
		},
	},
	spiralInspect: {
		title: "",
		text: "",
		pStatus: "",
		branches: {
		},
	},

}

