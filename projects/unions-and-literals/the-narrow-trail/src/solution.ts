export function runCommands(arr: number[] = []) {
	let nextSupply: "food" | "water" | undefined;
	let food = 5;
	let water = 5;

	for (let time = 1; time <= 7; time += 1) {
		// const randomNumber = Math.floor(Math.random() * 6) + 1;
		const randomNumber = arr[time];
		let command: "finish" | "food" | "water" | number;

		switch (randomNumber) {
			case 1:
				command = "food";
				break;

			case 2:
				command = "water";
				break;

			default:
				command = randomNumber;
				break;
		}
		let temp = nextSupply;
		if (typeof command === "number") {
			switch (nextSupply) {
				case "food":
					food += command;
					nextSupply = undefined;
					break;

				case "water":
					water += command;
					nextSupply = undefined;
					break;

				default:
					nextSupply = randomNumber % 2 === 0 ? "food" : "water";
					break;
			}
		}

		switch (command) {
			case "food":
				nextSupply = "food";
				break;

			case "water":
				nextSupply = "water";
				break;
		}

		food -= 1;
		water -= 1;
		console.log(
			`${time}: ${temp}, ${randomNumber} roll, ${food} food, ${water} water `
		);

		if (food === 0 || water === 0) {
			return false;
		}
	}

	return true;
}

// console.log(runCommands([0, 3, 4, 4, 1, 2]));
console.log(runCommands([0, 1, 3, 5, 2, 4, 6, 1]));
