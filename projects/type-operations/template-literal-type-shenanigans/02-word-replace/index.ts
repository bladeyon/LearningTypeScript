// Write your WordReplace type here! ✨
// You'll need to export it so the tests can run it.
export type WordReplace<
	T extends string,
	O extends string,
	R extends string
> = T extends `${infer Sub}${O}${infer Rest}`
	? WordReplace<`${Sub}${R}${Rest}`, O, R>
	: T;

type A = WordReplace<"123", "ba", "c">;
