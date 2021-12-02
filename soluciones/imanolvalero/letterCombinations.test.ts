import "jest";
import { letterCombinations } from "./letterCombinations";

describe("Reto 3, parte 1: Combinaciones posibles", () => {
	test("Test one number", () => {
		const input: number = 6
		const output: string[] = [ "m", "n", "o" ]
		expect(letterCombinations(input)).toStrictEqual(output);
	});
	test("Test multiples numbers", () => {
		const input: number = 234
		const output: string[] = [
			"adg", "adh", "adi", "aeg",
			"aeh", "aei", "afg", "afh",
			"afi", "bdg", "bdh", "bdi",
			"beg", "beh", "bei", "bfg",
			"bfh", "bfi", "cdg", "cdh",
			"cdi", "ceg", "ceh", "cei",
			"cfg", "cfh", "cfi"
		  ]
		expect(letterCombinations(input)).toStrictEqual(output);
	});
});
