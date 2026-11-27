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
		this.num_shards = 0;
		this.paths_taken = [];
		this.cracked = 0;
	}
}

class Inventory {
	constructor() {
		this.contents = [];
	}
}

class Item {
	constructor(name, description, img_src){
		this.name = name;
		this.description = description;
		this.img_src = img_src;
	}
}

class Stats{
	constructor(player,
				history
		) {
		this.player = player,
		this.history = history
	}
}

