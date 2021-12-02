import "jest";
import { NokiaKeyboard } from "./nokiaKeyboard";

describe("Reto 3, parte 2: averiguar la combinación", () => {
	test("Test", () => {
		const input: string = 'malo olma loma mola'
		const output: string = '62555666066655562055566662066665552'
		const nokia = new NokiaKeyboard()
		expect(nokia.getSecuence(input)).toStrictEqual(output);
	});
});
