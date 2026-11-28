class RoomManager {
	constructor(symbols) {
		this.symbols = symbols;
	}

	removeSymbol(symbol) {
		this.symbols = this.symbols.filter((e) => e != symbol); 
	}
}

class Player {
	constructor(name,
		        gender,
		        history,
		        inventory
		) {
		this.name = name;
		this.gender = gender;
		this.history = history;
		this.inventory = inventory;
		this.numShards = 0;
		this.pathsTaken = [];
		this.cracked = 0;
	}
}

class Inventory {
	constructor() {
		this.contents = [];
	}
}

class Item {
	constructor(name, description, imgSrc){
		this.name = name;
		this.description = description;
		this.imgsrc = imgSrc;
	}
}

class stats{
	constructor(player,
				history
		) {
		this.player = player,
		this.history = history
	}
}

