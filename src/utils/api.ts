import config from '../env.json'
import axios from 'axios';
import { ResponseType } from './types';

const { BASE_URL } = config
const API = BASE_URL + '/api.php'
export const FILE_PATH = BASE_URL + '/files'

export const getProduct = async <S>(params: object = {}):  Promise<ResponseType<S>> => {
	const resp = await axios.post(API, {
		action: "GetProduct",
		...params
	})
	return resp.data
}

export const getMarketplace = async <S>(params: object = {}):  Promise<ResponseType<S>> => {
	const resp = await axios.post(API, {
		action: "GetMarketplace",
		...params
	})
	return resp.data
}
