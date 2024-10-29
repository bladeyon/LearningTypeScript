// Write your deepEquality function here! ✨
// You'll need to export it so the tests can run it.
export const deepEquality = (a: string[][], b: string[][]) => {
	if (a.length !== b.length) {
		return false;
	}

	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length || a[i].join() !== b[i].join()) {
			return false;
		}
	}
	return true;
};
