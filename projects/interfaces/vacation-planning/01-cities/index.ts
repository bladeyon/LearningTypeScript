// Write your describeCity function here! ✨
// You'll need to export it so the tests can run it.
interface City {
	readonly coordinates: Coordinates;
	name: string;
	catchphrase?: string;
}

interface Coordinates {
	readonly north: Coordinate;
	readonly west: Coordinate;
}

type Coordinate = [number, number, number];

function describeCoordinate(coordinate: Coordinate) {
	const [deg, min, sec] = coordinate;
	return `${deg}°${min}'${sec}"`;
}

export const describeCity = (city: City): string => {
	const {
		name,
		catchphrase,
		coordinates: { west, north },
	} = city;
	const lines = [`${name}, New York`];
	if (catchphrase) {
		lines.push(`* "${catchphrase}"`);
	}
	lines.push(
		`* Located at ${describeCoordinate(north)}N ${describeCoordinate(west)}W`
	);
	return lines.join("\n");
};

console.log(
	describeCity({
		catchphrase: "Uncle Sam was here.",
		coordinates: {
			north: [42, 43, 54],
			west: [73, 41, 33],
		},
		name: "Troy",
	})
);
