// Write your Reverse type here! ✨
// You'll need to export it so the tests can run it.
// export type Reverse<T extends any[]> = ArrayLength<T> & T extends (infer Item)[]
// 	? [...Shift<T>, Item]
// 	: T;
export type Reverse<T extends any[]> = T extends [infer First, ...infer Other]
	? [...Reverse<Other>, First]
	: T;

type ArrayLength<T extends any[]> = T["length"];
type Unshift<T, Items extends any[]> = [T, ...Items];
type Shift<T extends any[]> = T extends [infer First, ...infer Items]
	? First
	: T;

type R1 = Shift<["a", string, "b"]>;
