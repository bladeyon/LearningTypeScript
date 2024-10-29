// Write your createKitchen function here! ✨
// You'll need to export it so the tests can run it.
type Stock = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};

type RecipeResult = {
	succeeded: boolean;
	newStock: Stock;
};

export type Cleaner = (dirt: number, time?: number) => number;
export type Supplier = (expense: number) => Stock;
type Recipe = (recipe: Stock) => RecipeResult;

type Kitchen = {
	announce(): string;
	clean(time?: number): void;
	purchase(expense: number): boolean;
	prepare(prepare: Recipe): boolean;
};

export const createKitchen = (
	budget: number,
	cleaner: Cleaner,
	supplier: Supplier
): Kitchen => {
	let dirt = 0;
	let stock = {
		breads: 0,
		fruits: 0,
		sauces: 0,
		vegetables: 0,
	};

	return {
		announce: () =>
			`I have ${dirt} much dirt, ${budget} budget, ${stock.breads} bread(s), ${stock.fruits} fruit(s), ${stock.sauces} sauce(s), and ${stock.vegetables} vegetable(s).`,
		clean: (time?: number) => {
			dirt = cleaner(dirt, time);
		},
		purchase: (expense) => {
			if (budget >= expense) {
				budget -= expense;
				const { breads, fruits, sauces, vegetables } = supplier(expense);
				stock.breads += breads;
				stock.fruits += fruits;
				stock.sauces += sauces;
				stock.vegetables += vegetables;
				return true;
			}
			return false;
		},
		prepare: (prepare) => {
			if (dirt < 100) {
				dirt++;
				const { succeeded, newStock } = prepare(stock);
				if (succeeded) {
					stock = newStock;
				}
				return succeeded;
			}
			return false;
		},
	};
};
