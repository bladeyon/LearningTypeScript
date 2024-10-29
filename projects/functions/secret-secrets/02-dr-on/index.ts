// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.
type Cipher = (text: string) => string;
export function createAdvancedCipher(
	onVowel: Cipher,
	onConsonant: Cipher,
	onPunctuation: Cipher
) {
	return (text: string) => {
		let ret = "";
		const vowelRegex = /[aeiou]/i;
		const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/i;
		for (const char of text) {
			let cipher = onPunctuation;
			if (vowelRegex.test(char)) {
				cipher = onVowel;
			} else if (consonantRegex.test(char)) {
				cipher = onConsonant;
			}
			ret += cipher(char);
		}
		return ret;
	};
}
