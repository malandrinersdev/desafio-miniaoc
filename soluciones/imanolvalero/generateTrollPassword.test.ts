import "jest";
import { generateTrollPassword } from "./generateTrollPassword";

describe("Reto 2: Malo de la Olma de la Loma Mola", () => {
	test("Test", () => {
		const input: string = "mola";
		const output: string[] = [
			"mola", "moal", "mloa", "mlao", "maol", "malo",
			"omla", "omal", "olma", "olam", "oaml", "oalm",
			"lmoa", "lmao", "loma", "loam", "lamo", "laom",
			"amol", "amlo", "aoml", "aolm", "almo", "alom",
		];
		const realOutput = generateTrollPassword(input)
		expect(
			output.every(elem => realOutput.includes(elem)) &&
			realOutput.every(elem => output.includes(elem))
		).toBe(true)
	});
});
