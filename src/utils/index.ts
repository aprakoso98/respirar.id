export {}
declare global {
	type MyObject<T = string> = Record<string, T>
	interface FormData {
		appendObject(obj: MyObject, except?: string[]): void;
	}
	interface Array<T> {
		generateEmpty(length: number, empty?: boolean): (string | number)[]
		rMap(callback: (data: T, key: number) => JSX.Element): JSX.Element[]
		loopCallback(
			callback: (data: T, index: number, returnCallback: (timeout?: number) => void) => void,
			reverse?: boolean,
			index?: number
		): void
	}
	interface Number {
		format(delimiter?: number, count?: number): string
		convertRupiah(): string
	}
	interface String {
		kebabToCamel(): string
		snakeToCamel(): string
		camelToSnake(): string
		camelToKebab(): string
		openUrl(): void
		validURL(): boolean
		generateInitial(): string
		ucfirst(): string
		lcfirst(): string
		ucwords(): string
		isBool(): boolean
		/** convert 123456 become Rp. 123.456 */
		convertRupiah(): string
		/** convert Rp. 123.456 become 123456 */
		extractNumber(): number
		toInt(): number
		getRawUrl(): string
		getParamFromUrl(): MyObject
	}
	interface Math {
		randomInt: (min: number, max: number) => number;
	}
}