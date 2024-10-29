// Write your classes here! ✨
// You'll need to export them so the tests can run them.
interface Opponent {
	power: number;
	evil: boolean;
	name: string;
}
export abstract class Horror {
	abstract readonly name: string;
	#consumed: Opponent[] = [];

	doBattle(opponent: Horror) {
		if (this.getPower() >= opponent.getPower()) {
			this.#consumed.push({
				power: opponent.getPower(),
				evil: opponent.isEvil(),
				name: opponent.name,
			} as Opponent);
		}
	}
	getPower() {
		return this.#consumed.reduce(
			(acc, cur) => acc + this.getPowerFrom(cur),
			this.#consumed.length
		);
	}

	protected abstract getPowerFrom(opponent: Opponent): number;
	protected abstract isEvil(): boolean;
}

export class Demon extends Horror {
	readonly name = "Demon";

	// constructor() {
	// 	super();
	// }

	getPowerFrom(opponent: Opponent): number {
		return opponent.evil ? opponent.power / 2 : opponent.power * 2;
	}
	isEvil() {
		return true;
	}
}

export class Sorcerer extends Horror {
	name: string;
	#evil: boolean;
	constructor(name: string, evil: boolean) {
		super();
		this.name = name;
		this.#evil = evil;
	}
	getPowerFrom(opponent: Opponent): number {
		return opponent.evil !== this.#evil ? opponent.power : opponent.power * 2;
	}
	isEvil(): boolean {
		return this.#evil;
	}
}
