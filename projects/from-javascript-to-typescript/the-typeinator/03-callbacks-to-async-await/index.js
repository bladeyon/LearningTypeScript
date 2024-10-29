// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.
async function checkEmotion(emotions, name) {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return emotions.has(name);
}

async function speak(emotions, name, phrase) {
	if (!(await checkEmotion(emotions, name))) {
		throw new Error(`Does not compute. I do not understand ${name}.`);
	}
	return `"${phrase}" (${name})`;
}

module.exports = { checkEmotion, speak };
