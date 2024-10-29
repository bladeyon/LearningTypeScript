// Write your type and classes here! ✨
// You'll need to export the classes so the tests can run them.
type SmallPetFood =
	| "bugs"
	| "fruits"
	| "insects"
	| "plants"
	| "seeds"
	| "vegetables";
abstract class SmallFurryPet {
	readonly species: string;
	protected happiness: number;
	constructor(species: string) {
		this.species = species;
		this.happiness = 0;
	}

	abstract eats(food: SmallPetFood): boolean;
	isHappy() {
		return this.happiness > 0;
	}
}

export class Gerbil extends SmallFurryPet {
	constructor() {
		super("Gerbil");
	}
	dig() {
		this.happiness += 1;
	}
	eats(food: SmallPetFood) {
		return ["insects", "plants", "seeds", "vegetables"].includes(food);
	}
}

export class Hamster extends SmallFurryPet {
	constructor() {
		super("Hamster");
	}
	run() {
		this.happiness += 1;
	}
	eats() {
		return true;
	}
}
