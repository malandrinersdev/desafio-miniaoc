import { NokiaKeyboard } from "./nokiaKeyboard";

const customPermutation = (array: string[][]): string[] => {
    const [first, second, ...rest] = array;
    if (!first?.length ?? false) return []
    if (!second?.length ?? false) return first
    const res: string[] = first.map(
        (firstValue: string) => 
            second.map((secondValue: string) =>
                firstValue.concat(secondValue)
            ).flat()
    ).flat()
    return !!rest.flat().length ? customPermutation([res, ...rest]) : res
};

const memoizeFunction = <Type>(fn: Function, ...args: Type[]): Function => {
	let cache = new Map<Type[], Type>();
	return (...args: Type[]) => cache.get(args) 
                   ?? cache.set(args, fn(...args)).get(args);
};

export const letterCombinations = (digits:number):string[] => {
    const nkb = new NokiaKeyboard();
    const elems = (''+digits).split('').map(key => nkb.getChars(key))
    const fn = memoizeFunction<string>(customPermutation)
    return fn(elems)
}
