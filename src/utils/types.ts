import { RouteComponentProps } from "react-router-dom";
import { Colors } from "./constants";

export type screenProps<Params extends { [K in keyof Params]?: string } = {}> = RouteComponentProps<{ product: string } & Params>

export type colorType = keyof typeof Colors | string & { color?: string }

export type HighlightType = Record<'name' | 'btnText' | 'image' | 'redirect' | 'id' | 'position', string> & { visible?: '1' | '0' }

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

export type productMarketplaceType = MyObject

export type collectionType = {
	id: string,
	kategori: string
	productUrl: string,
	productName: string,
	shortDescription: string,
	image: string,
	image2: string
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