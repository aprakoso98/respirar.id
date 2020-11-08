import config from '../env.json'
import axios from 'axios';
import { HighlightType, ResponseType } from './types';

const { BASE_URL, FILE_URL } = config
const API = BASE_URL + '/api.php'
export const FILE_PATH = FILE_URL + '/'

const httpRequest = async <S>(action: string, params: MyObject<unknown> = {}): Promise<ResponseType<S>> => {
	const resp = await axios.post(API, { action, ...params })
	return resp.data
}

export const getHighlight = (params: { forCms?: boolean } = {}): Promise<ResponseType<HighlightType[]>> => {
	return httpRequest<HighlightType[]>('GetHighlight', params)
}

export const getBanner = async <S>(params: object = {}): Promise<ResponseType<S>> => {
	const resp = await axios.post(API, {
		action: "GetBanner",
		...params
	})
	return resp.data
}

export const getProduct = async <S>(params: object = {}): Promise<ResponseType<S>> => {
	const resp = await axios.post(API, {
		action: "GetProduct",
		...params
	})
	return resp.data
}

export const getMarketplace = async <S>(params: object = {}): Promise<ResponseType<S>> => {
	const resp = await axios.post(API, {
		action: "GetMarketplace",
		...params
	})
	return resp.data
}

export const getAbout = async <S>(params: object = {}): Promise<ResponseType<S>> => {
	const resp = await axios.post(API, {
		action: "GetAbout",
		...params
	})
	return resp.data
}

export const getInfo = async <S>(params: object = {}): Promise<ResponseType<S>> => {
	const resp = await axios.post(API, {
		action: "GetInfo",
		...params
	})
	return resp.data
}