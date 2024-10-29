import { schemesInOrder } from "./poetry";

// namespace TheBard {

export function verifyProse(prose: string[]) {
	return schemesInOrder.find((scheme) => scheme.verify(prose))?.name;
}
// }
