export const generateTrollPassword = (word: string): string[] => {
	if (word.length == 0) return [];
	if (word.length == 1) return [word];
    let res: string[] = []
	word.split('').forEach((letter, index) => {
		let subword = word.slice(0, index).concat(word.slice(index + 1));
        generateTrollPassword(subword).forEach((elem) => res.push(letter.concat(elem)))
	});
    return res;
};

console.log(generateTrollPassword('mola'))