// Write your zip function here! ✨
// You'll need to export it so the tests can run it.

export function zip<T, P>(a: T[], b: P[]) {
	const ret: (T | P)[] = [];
	for (let index = 0; index < Math.min(a.length, b.length); index++) {
		ret.push(a[index]);
		ret.push(b[index]);
	}

	if (a.length > b.length) {
		ret.push(...a.slice(b.length));
	} else if (a.length < b.length) {
		ret.push(...b.slice(a.length));
	}

	return ret;
}
