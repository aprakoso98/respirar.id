import { FILE_PATH } from './api';

export const convertPath = (str: string): string => str.replace(/\$FILE_PATH/g, FILE_PATH)

export const convertPrices = (str: string): string[] => str.split('|').map(prize => prize.convertRupiah())

export const priceRange = (prices: string): string => {
	const pricesArr = convertPrices(prices)
	const range = pricesArr.filter((_, i) => i === 0 || i === pricesArr.length - 1).join(' - ')
	return range
}

export const replaceSpaces = (str: string): string => str.replace(/\s/g, '-')