// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.
export type AlignmentOptions = {
	width: number;
	align?: "left" | "middle" | "right";
};
export function alignTexts(texts: string[], options: AlignmentOptions) {
	const ret: string[][] = [];
	const { width, align = "left" } = options;
	for (let text of texts) {
		const lines = splitLines(text, width);
		ret.push(alignLines(lines, { align, width }));
	}
	return ret;
}

function splitLines(text: string, width: number): string[] {
	if (text.length <= width) return [text];
	const lines: string[] = [];
	const words = text.split(" ");
	let line = "";
	for (let i = 0; i < words.length; i++) {
		if (line === "") line = words[i];
		else if (line.length + words[i].length < width) {
			line += " " + words[i]; // 上面是用空格截取的，所以这里补上
		} else {
			lines.push(line);
			line = words[i];
		}
	}
	lines.push(line);
	return lines;
}

function alignLines(
	lines: string[],
	{ align = "left", width }: AlignmentOptions
) {
	return lines.map((line) => aligners[align](line, width));
}

const aligners = {
	left: (line: string, width: number) => line.padEnd(width),
	middle: (line: string, width: number) => {
		const remainingSpaces = width - line.length;
		return (
			" ".repeat(Math.floor(remainingSpaces / 2)) +
			line +
			" ".repeat(Math.ceil(remainingSpaces / 2))
		);
	},
	right: (line: string, width: number) => line.padStart(width),
};

console.log(alignTexts(["ab     de", "abc def", "abcd ef"], { width: 4 }));
