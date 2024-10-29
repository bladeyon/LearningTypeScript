// Write your groupRestaurants function here! ✨
// You'll need to export it so the tests can run it.
interface Restaurant {
	city: string;
	name: string;
}

interface RestaurantsOfCity {
	[city: string]: string[];
}

export function groupRestaurants(restaurants: Restaurant[]): RestaurantsOfCity {
	const grouped: RestaurantsOfCity = {};
	for (const { city, name } of restaurants) {
		if (city in grouped) {
			grouped[city].push(name);
		} else {
			grouped[city] = [name];
		}
	}
	return grouped;
}

// console.log(
// 	groupRestaurants([
// 		{ city: "Troy", name: "Muddaddy Flats" },
// 		{ city: "Albany", name: "Bombers" },
// 		{ city: "Troy", name: "Nighthalks" },
// 	])
// );
