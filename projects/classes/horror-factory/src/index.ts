// Write your class and functions here! ✨
// You'll need to export the class and functions so the tests can run it.
interface Consumed {
	name: string;
	evil: boolean;
	power: number;
}

interface HorrorSettings {
	name: string;
	getPowerFrom: (consumed: Consumed) => number;
	isEvil: () => boolean;
}

export class Horror {
	#consumed: Consumed[] = [];
	readonly #isEvil: () => boolean;
	readonly name: string;
	readonly #getPowerFrom: (consumed: Consumed) => number;
	constructor({ name, getPowerFrom, isEvil }: HorrorSettings) {
		this.#isEvil = isEvil;
		this.name = name;
		this.#getPowerFrom = getPowerFrom;
	}
	doBattle(opponent: Horror) {
		if (this.getPower() >= opponent.getPower()) {
			this.#consumed.push({
				evil: opponent.#isEvil(),
				name: opponent.name,
				power: opponent.getPower(),
			});
		}
	}
	getPower() {
		return this.#consumed.reduce(
			(previous, consumed) => previous + this.#getPowerFrom(consumed),
			this.#consumed.length
		);
	}
}

export function createDemon() {
	return new Horror({
		name: "Demon",
		getPowerFrom: (consumed: Consumed) =>
			consumed.evil ? consumed.power / 2 : consumed.power * 2,
		isEvil: () => true,
	});
}

export function createSorcerer(name: string, evil: boolean) {
	return new Horror({
		name,
		getPowerFrom: (consumed: Consumed) =>
			consumed.evil === evil ? consumed.power * 2 : consumed.power,
		isEvil: () => evil,
	});
}
