class Button {
    private _key: string
    private _chars: string[]
    constructor (key: string, chars: string){
        this._key = ''+key
        this._chars = chars.split('').map(x => x.toLowerCase())
    }

    getKey(): string {
        return this._key
    }
    getChars(): string[] {
        return this._chars
    }

    getChar(repetitions: number): string {
        return this._chars.length >= repetitions && this._chars[repetitions-1] || ''
    }

    private has(char: string): boolean {
        return this._chars.includes(char)
    }
    
    getMaxRepetitions(): number {
        return this._chars.length
    }
    
    private getRepetitions(char: string): number {
        return this.has(char) && this._chars.indexOf(char) + 1 || 0
    }

    getCombination(char: string): string {
        const c = char.toLocaleLowerCase()
        return this._key.repeat(this.getRepetitions(c))
    }
}

export class NokiaKeyboard {
    private _buttons: Button[]

    constructor() {
        this._buttons = [
            new Button('2', 'ABC'),
            new Button('3', 'DEF'),
            new Button('4', 'GHI'),
            new Button('5', 'JKL'),
            new Button('6', 'MNO'),
            new Button('7', 'PQRS'),
            new Button('8', 'TUV'),
            new Button('9', 'WXYZ'),
            new Button('0', ' '),
        ]
    }

    getSecuence(text: string): string {
        return text.toLocaleLowerCase().split('').map( char => 
            this._buttons.map( button => 
                button.getCombination(char)
            ).join('')
        ).join('')
    }

    private getButton(key: string): any {
        return this._buttons.find(button => button.getKey() == key)
    }

    private parsedSecuence(secuence: string): [string, number][]{
        const res: [string, number][] = []
        let temp:string = secuence
        while (temp.length > 0) {
            const char:string = temp[0]
            const button: any = this.getButton(char)
            const maxRepetitions: number = button.getMaxRepetitions()
            let repetitions: number = 1
            for (let i = 0; 
                 temp[i] == temp[i+1] && i < temp.length && i < maxRepetitions-1;
                 i++
            ) repetitions++

            res.push([char, repetitions])
            temp = temp.substring(repetitions)
        }
        return res
    }

    getText(secuence: string): any {
        return this.parsedSecuence(secuence).map(parsedPulsation => {
            return this.getButton(parsedPulsation[0]).getChar(parsedPulsation[1])
        }).join('')
    }

    getChars(key: string): string[] {
        return this.getButton(key).getChars()
    }
}

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
