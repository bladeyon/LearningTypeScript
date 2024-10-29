// Write your deepDifferences function here! ✨
// You'll need to export it so the tests can run it.
export const deepDifferences = (a: string[][], b: string[][]) => {
	const results: ((string | undefined)[] | undefined)[] = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) {
			results.push(undefined);
			continue;
		}

		const result: (string | undefined)[] = [];
		for (let j = 0; j < a[i].length; j++) {
			result.push(a[i][j] === b[i][j] ? a[i][j] : undefined);
		}
		results.push(result);
	}
	return results;
};
