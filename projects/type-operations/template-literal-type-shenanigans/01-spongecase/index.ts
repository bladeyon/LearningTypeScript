// Write your SpOnGeCaSe type here! ✨
// You'll need to export it so the tests can run it.
export type SpOnGeCaSe<
	T,
	C extends "upper" | "lower" = "upper"
> = T extends `${infer First}${infer Rest}`
	? C extends "upper"
		? `${Uppercase<First>}${SpOnGeCaSe<Rest, "lower">}`
		: `${Lowercase<First>}${SpOnGeCaSe<Rest, "upper">}`
	: "";

// `${First}${Second}${Rest}`

type R = SpOnGeCaSe<"abc def">;
