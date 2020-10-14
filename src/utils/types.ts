export interface objectType<T> { [key: string]: T }

import { RouteComponentProps } from "react-router-dom";
import { Colors } from "./constants";

export type screenProps<Params extends { [K in keyof Params]?: string } = {}> = RouteComponentProps<{ product: string } & Params>

export type colorType = keyof typeof Colors | string & { color?: string }

export interface ResponseType<R> {
	status: boolean
	data: R
}

export type marketplaceType = {
	id: string
	baseUrl: string
	icon: string
	marketPlaceName: string
}

/** 
 * @ Key is an id marketplace, and value is url 
 * @ to convert it become valid value, just add it with marketplace
 * */
export type productMarketplaceType = {
	[key: string]: string
}

export type collectionType = {
	id: string,
	productUrl: string,
	productName: string,
	shortDescription: string,
	image: string,
	prices: string,
	marketplaces: string
}

export type producType = {
	id: string
	isHighlighted: string
	highlightIndex: string
	productName: string
	sku: string
	availability: string
	sizes: string
	prices: string
	marketplaces: string
	description: string
	shortDescription: string
	image: string
}