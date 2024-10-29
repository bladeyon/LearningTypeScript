// Write your Zip type here! ✨
// You'll need to export it so the tests can run it.
export type Zip<T extends any[], U extends any[]> = T extends [
	infer FirstT,
	...infer OtherT
]
	? U extends [infer FirstU, ...infer OtherU]
		? [FirstT, FirstU, ...Zip<OtherT, OtherU>]
		: T
	: U;

type Push<T, Z extends any[]> = [...Z, T];

type Z = Zip<[], [1, 2, 3]>;
