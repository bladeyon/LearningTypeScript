// Write your pickMany function here! ✨
// You'll need to export it so the tests can run it.
export const pickMany: <T, K extends keyof T>(a: T, b: K[]) => T[K][] = (
	container,
	keys
) => keys.map((key) => container[key]);
