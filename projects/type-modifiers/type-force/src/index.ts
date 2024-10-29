// Write your duel function and types below! ✨
// You'll need to export duel so the tests can run it.

const mutationsLibrary = {
	energy: (hero) => {
		hero.power *= 1.25;
		hero.flying = true;
	},
	healing: (hero) => {
		hero.toughness *= 2;
	},
	luck: (hero) => {
		hero.power *= 1.25;
		hero.toughness *= 1.25;
	},
	flight: (hero) => {
		hero.flying = true;
	},
	strength: (hero) => {
		hero.power *= 2;
	},
	wings: (hero) => {
		hero.flying = true;
		hero.toughness *= 0.9;
	},
} as MutationKLib;

interface Character {
	flying: boolean;
	name: string;
	power: number;
	toughness: number;
}

interface MutationKLib {
	[key: string]: (hero: Character) => void;
}

function createCharacter(name: string, mutations: Mutation[]): Character {
	const character = {
		flying: false,
		name,
		power: 1,
		toughness: 1,
	};

	for (const mutation of mutations) {
		mutationsLibrary[mutation](character);
	}

	return character;
}
type Mutation = keyof typeof mutationsLibrary;
interface Fighter {
	name: string;
	mutations: Mutation[];
}

export function duel(good: Fighter, bad: Fighter) {
	const g = createCharacter(good.name, good.mutations);
	const b = createCharacter(bad.name, bad.mutations);
	const gs = g.power / b.toughness;
	const bs = b.power / g.toughness;
	return gs >= bs ? (["hero", g] as const) : (["villain", b] as const);
}
