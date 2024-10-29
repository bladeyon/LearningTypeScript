// Write your collectTreasure function here! ✨
// You'll need to export it so the tests can run it.

interface Catacomb<T> {
	type: "catacomb";
	inside: Buried<T>;
}

interface TunnelSystem<T> {
	type: "tunnels";
	entrances: Buried<T>[];
}
type NextArea<T> = Catacomb<T> | TunnelSystem<T>;

interface Treasure<T> {
	type: "treasure";
	content: T;
}

export type Buried<T> = Buried<T>[] | NextArea<T> | Treasure<T>;

export function collectTreasure<
	Content,
	Fake extends Content,
	Real extends Content
>(
	buried: Buried<Content>,
	isFake: (item: Content) => item is Fake,
	isReal: (item: Content) => item is Real
): {
	fake: Fake[];
	real: Real[];
	scrap: Content[];
} {
	const fake: Fake[] = [],
		real: Real[] = [],
		scrap: Content[] = [];

	function flat(data: Buried<Content>) {
		const g = collectTreasure(data, isFake, isReal);
		fake.push(...g.fake);
		real.push(...g.real);
		scrap.push(...g.scrap);
	}

	if (Array.isArray(buried)) {
		for (const item of buried) {
			flat(item);
		}
	} else {
		switch (buried.type) {
			case "treasure":
				if (isReal(buried.content)) {
					real.push(buried.content);
				} else if (isFake(buried.content)) {
					fake.push(buried.content);
				} else {
					scrap.push(buried.content);
				}
				break;
			case "catacomb":
				flat(buried.inside);
				break;
			case "tunnels":
				for (const item of buried.entrances) {
					flat(item);
				}
				break;
		}
	}

	return { fake, real, scrap };
}
