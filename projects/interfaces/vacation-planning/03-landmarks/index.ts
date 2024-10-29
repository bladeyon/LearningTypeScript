// Write your describeLandmark function here! ✨
// You'll need to export it so the tests can run it.
interface LandBase {
	name: string;
}

interface River extends LandBase {
	type: "river";
	depth: number;
	length: number;
}

interface MountainOrWaterfall extends LandBase {
	type: "mountain" | "waterfall";
	height: number;
}

interface Lighthouse extends LandBase {
	type: "lighthouse";
	height: number;
	lit: number;
}

interface Park extends LandBase {
	type: "park";
	acres: number;
}

interface Fort extends LandBase {
	type: "fort";
}

interface Lake extends LandBase {
	type: "lake";
	miles: number;
}
export type Landmark =
	| River
	| MountainOrWaterfall
	| Lighthouse
	| Park
	| Fort
	| Lake;

export function describeLandmark(landmark: Landmark): string {
	const ret: string[] = [
		`${landmark.name} is a ${landmark.type} in Upstate New York.`,
	];
	let other = "";
	switch (landmark.type) {
		case "river":
			other = `It flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`;
			break;
		case "mountain":
		case "waterfall":
			other = `Its peak is ${landmark.height} feet high.`;
			break;
		case "lighthouse":
			other = `It was first lit in ${landmark.lit} and is ${landmark.height} feet high.`;
			break;
		case "park":
			other = `It covers ${landmark.acres} square acres.`;
			break;
		case "lake":
			other = `It covers ${landmark.miles} square miles of water.`;
			break;
		default:
			break;
	}

	if (other) ret.push(other);
	return ret.join("\n");
}

// console.log(
// 	describeLandmark({
// 		depth: 30,
// 		length: 315,
// 		name: "Hudson River",
// 		type: "river",
// 	})
// );
