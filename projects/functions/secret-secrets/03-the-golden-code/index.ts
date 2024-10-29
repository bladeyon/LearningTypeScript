// Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.
type CrackerParam = {
	attempts: number;
	makeGuess: (text: string, attempt: number) => string;
	validateGuess: (guess: string) => boolean;
};

type Cracker = (cracker: CrackerParam) => (text: string) => string | undefined;

export const createCodeCracker: Cracker =
	(cracker: CrackerParam) => (text: string) => {
		const guess = cracker.makeGuess(text, cracker.attempts - 1);
		return cracker.validateGuess(guess) ? guess : undefined;
	};

// const cracker = createCodeCracker({
// 	attempts: 1,
// 	makeGuess: () => "",
// 	validateGuess: () => false,
// });
// console.log(cracker(""));
