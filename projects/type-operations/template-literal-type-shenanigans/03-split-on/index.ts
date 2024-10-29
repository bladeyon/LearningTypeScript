// Write your SplitOn type here! ✨
// You'll need to export it so the tests can run it.
export type SplitOn<
	T extends string,
	O extends string
> = T extends `${infer F}${O}${infer E}` ? [F, ...SplitOn<E, O>] : [T];
