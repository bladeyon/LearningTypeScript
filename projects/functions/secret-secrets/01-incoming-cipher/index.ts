// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.
type Cipher = (text: string) => string;
export function createCipher(cipher: Cipher) {
	return (input: string) => {
		let result = "";
		for (const char of input) {
			result += cipher(char);
		}
		return result;
	};
}
