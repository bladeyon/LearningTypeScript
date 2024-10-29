export function runCommands(arr: number[] = []) {
	// Declare your variables and runtime logic here! ✨
	let resupply: "Food" | "Water" | undefined;
	let day = 1,
		food = 5,
		water = 5;

	let ret = true;

	while (day <= 7) {
		const num = arr.length ? arr[day] : Math.round(Math.random() * 5) + 1; // 1~6
		// const num = arr[day];

		if (num == null) {
			ret = false;
			break;
		}
		let temp = resupply;

		switch (resupply) {
			case "Water":
				water += num;
				resupply = undefined;
				break;
			case "Food":
				food += num;
				resupply = undefined;
				break;

			default:
				resupply = num % 2 === 1 ? "Water" : "Food";
				break;
		}

		water--;
		food--;

		// console.log(`${day}: ${temp}, ${num} roll, ${food} food, ${water} water `);

		if (water === 0 || food === 0) {
			ret = false;
			break;
		}
		day++;
	}
	return ret;
}

// console.log(runCommands([0, 3, 4, 4, 1, 2]));
// console.log(runCommands([0, 1, 3, 5, 2, 4, 6, 1]));
// console.log(runCommands([0, 3, 4, 5, 1, 2]));

console.log(runCommands([0, 3, 4, 5, 1, 2]));
console.log(runCommands([0, 3, 4, 5, 3, 4]));
console.log(runCommands([0, 1, 2, 3, 4, 5, 6, 1]));
console.log(runCommands([0, 1, 3, 5, 2, 4, 6, 1]));
console.log(runCommands([0, 2, 4, 1, 4, 1, 1, 1]));
console.log(runCommands([0, 2, 3, 1, 3, 2, 2, 2]));
