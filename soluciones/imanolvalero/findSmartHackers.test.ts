import "jest";
import { findSmartHackers } from "./findSmartHackers";

const testingInput: string[] = [
	'hola@somoshackersastutos.com',
	'ambrosio@outlook.com',
	'coco@malandriners.dev',
	'hello@somoshackersastutos.com',
	'ambrosio@outlook.com',
	'ciao@somoshackersastutos.com',
]

describe("Reto 1: Los hackers astutos", () => {
	test("Test", () => {
		const output: string[] = [
			'hola@somoshackersastutos.com',
			'hello@somoshackersastutos.com',
			'ciao@somoshackersastutos.com'
		]
		expect(findSmartHackers(testingInput)).toStrictEqual(output);
	});
});
