const rooms = {
	title: {
		title: "Between the Interpolated",
		text: "",
		pStatus: "",
		branch: false,
	},
	0: {
		title: "The flickering blue light is hypnotic. Red and pixelated letters throb and ask a simple question: ", 
		text: "DO YOU WANT TO DOWNLOAD DEMIURGE.EXE?",
		pStatus: "Curious",
		branch: {
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
		branch: {
			"eye": [],
			"questionMark": [],
			"skull": [],
			"spiral": [],
		},
	},
	n0: {
		title: "Did you think this was a game?",
		text: "Your computer exploded, leaving nothing but charred walls and an unpleasant aroma.",
		pStatus: "Crispy",
		branch: false
	},

}

