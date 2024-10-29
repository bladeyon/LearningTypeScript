// Write your shallowEquality function here! ✨
// You'll need to export it so the tests can run it.
export const shallowEquality = (a: string[], b: string[]) => {
	if (a.length !== b.length) {
		return false;
	}
	return a.join() === b.join();
};
