// Write your unique function here! ✨
// You'll need to export it so the tests can run it.
export function unique<T>(...items: T[][]) {
	let ret: T[] = [];
	for (const item of items) {
		ret = ret.concat(...item);
	}
	return Array.from(new Set<T>(ret));
}
