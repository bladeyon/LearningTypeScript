// Write your types here! ✨

declare global {
	interface String {
		alternating(separator?: string): string[];
	}

	interface Array<T> {
		smoosh(separator?: string): string;
		unsmoosh(): string[];
	}
}

// 要注释掉 ./solution.ts 中的 declare，不然报错
String.prototype.alternating = function (separator = "-") {
	return this.split(separator);
};

Array.prototype.unsmoosh = function () {
	return [this[0], this[1]];
};

Array.prototype.smoosh = function (separator = "-") {
	return this.join(separator);
};

export function logMessage(): string {
	const encodedMessage =
		"wjheiwcehljearv'assfcarvioprtiptrei?msitt-irvienigssa!";

	const alternating = encodedMessage.alternating("'");
	const [question, answer] = alternating.unsmoosh();

	console.log(question);
	console.log(` - ${answer}`);

	return [question, answer].smoosh("/");
}

console.log(logMessage());
