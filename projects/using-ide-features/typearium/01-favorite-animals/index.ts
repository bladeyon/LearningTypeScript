// Refactor here! ✨
const FavoriteAnimals = [
	"parakeet",
	"macaw",
	"cat",
	"monkey",
	"elephant",
	"alpaca",
	"fox",
];
export function checkIsAnyAnimalFavorite(...animals: string[]) {
	const favoriteAnimalsUnique = new Set(FavoriteAnimals);

	return animals.some((animal) => favoriteAnimalsUnique.has(animal));
}

export function getFavoriteAnimals(max = Infinity) {
	return FavoriteAnimals.slice(0, max);
}

export function logFavoriteAnimals() {
	FavoriteAnimals.forEach((animal, i) => {
		console.log(`I like ${animal} number ${i}!`);
	});
}
