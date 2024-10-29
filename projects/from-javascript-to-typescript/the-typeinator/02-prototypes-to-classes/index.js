// Put your Robot and Humanoid classes here! ✨
// See ./original.js for their older JavaScript code.
class Humanoid extends Robot {
	constructor(name, abilities, catchphrase) {
		super(name, abilities);
		this.catchphrase = catchphrase;
	}

	announce() {
		super.announce();
		console.log(` > ${this.catchphrase} <`);
	}
}
class Robot {
	constructor(name, abilities) {
		this.name = name;
		this.abilities = abilities;
		this.power = 100;
	}

	announce() {
		console.log(`Greetings. I am ${this.name}.`);
		for (const ability of this.abilities) {
			console.log(`I am able to ${ability}.`);
		}
	}

	charge(per) {
		if (this.power === 100) {
			console.log("I am at optimal operational capacity.");
		}
		if (this.power < 100) {
			this.power = Math.min(this.power + per, 100);
			console.log(`Recharged power supplies to ${this.power}.`);
		}
	}

	move(per) {
		if (this.power < per) {
			console.log("I do not have enough power to move " + per + " units.");
		} else {
			console.log("Moving " + per + " units.");
			this.power -= per;
		}
	}
}
module.exports.Humanoid = Humanoid;
module.exports.Robot = Robot;
