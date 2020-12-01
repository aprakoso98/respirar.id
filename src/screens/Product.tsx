import React, { useEffect } from 'react';
import HtmlParser from 'react-html-parser';
import { useSelector } from 'react-redux';
import BreadCrumb from 'src/components/commons/BreadCrumb';
import Button from 'src/components/elements/Button';
import Container from 'src/components/elements/Container';
import Icon from 'src/components/elements/Icon';
import Image from 'src/components/elements/Image';
import Text from 'src/components/elements/Text';
import View from 'src/components/elements/View';
import Wrapper from 'src/components/elements/Wrapper';
import { useStateObject } from 'src/hooks/useState';
import useWindowSize from 'src/hooks/useWindowSize';
import { FILE_PATH, getProduct } from 'src/utils/api';
import { convertPrices, generateMarketplace } from 'src/utils/helper';
import { producType, screenProps } from 'src/utils/types';
import { modal } from '../redux/actions/modal';

const Product = ({ match: { params } }: screenProps): JSX.Element => {
	// @ts-ignore
	const Marketplaces = useSelector(state => state.Marketplace)
	const [, , isMobile] = useWindowSize()
	const [state, setState] = useStateObject<{
		sizes?: string[],
		prices?: string[],
		selectedSize?: number,
	}>({})
	const [product, setProduct] = useStateObject<Partial<producType>>({})
	const getData = async () => {
		const { status, data } = await getProduct<producType>({ productUrl: params.product })
		if (status) {
			setProduct(data)
			setState({
				sizes: data.sizes.split('|'),
				selectedSize: 0,
				prices: convertPrices(data.prices)
			})
		} else {
			// history.push('/404')
		}
	}
	const buyProduct = async () => {
		const listMarketplace: any[] = generateMarketplace(product.marketplaces, Marketplaces)
		if (listMarketplace.length > 0) {
			modal.setBackdropClick(modal.hide).setContent(<View className="bg-light">
				{listMarketplace.rMap(m => {
					const url: string = m.baseUrl + m.link
					return <Button onClick={() => {
						modal.hide()
						url.openUrl()
					}}>
						<Image className="w-1/4" source={FILE_PATH + m.icon} />
						<Text className="w-full">{m.marketplaceName}</Text>
					</Button>
				})}
			</View>).show('w-1/3')
		} else if (listMarketplace.length === 1) {
			const { baseUrl, link } = listMarketplace[0]
			const url: string = baseUrl + link
			url.openUrl()
		} else {
			alert('Not found')
		}
	}
	const effect = () => {
		getData()
	}
	useEffect(effect, [])
	return <Container className={`${isMobile ? 'ph-5 pv-5' : 'ph-15 pv-10'}`}>
		<Wrapper direction={isMobile ? 'col' : 'row'} items="start">
			<View direction="row" wrap className={`${isMobile ? '' : 'w-3/5 mr-5'}`}>
				{Object.keys(product).filter(k => k.includes('image')).rMap(k => {
					return <View className="w-1/2 p-1">
						{/* @ts-ignore */}
						<Image preview source={FILE_PATH + product[k]} />
					</View>
				})}
			</View>
			<View className={`${isMobile ? 'mv-5' : 'ml-5 w-2/5'}`}>
				<BreadCrumb size="3" links={[{ name: 'Collections', redirect: '/collections' }, { name: params.product }]} />
				<Text className="title f-15">{product.productName}</Text>
				<Text className="f-3 mb-10">{state.prices && state.prices[state.selectedSize || 0]}</Text>
				<Wrapper justify={isMobile ? 'between' : 'start'} className="mb-5">
					<Wrapper className={`${isMobile ? '' : 'mr-5'}`}>
						<Text>SKU :</Text>
						<Text className="ml-1 c-dark">{product.sku}</Text>
					</Wrapper>
					<Wrapper>
						<Text>Avaibility :</Text>
						<Text className="ml-1 c-dark">{product.availability}</Text>
					</Wrapper>
				</Wrapper>
				<Text className="mb-10 c-dark">{HtmlParser(product.description as string)}</Text>
				<Wrapper justify={isMobile ? 'between' : 'start'}>
					<Text className="mr-10">Size</Text>
					<Wrapper justify={isMobile ? 'start' : undefined} className={`${isMobile ? 'w-1/3' : 'w-1/6'}`}>
						{state.sizes && state.sizes.rMap(
							(size: string, index: number) => <Button
								textProps={{ style: { whiteSpace: 'nowrap' }, className: index === state.selectedSize ? 'c-dark f-2' : '' }}
								onClick={() => setState({ selectedSize: index })}>{size}</Button>
						)}
					</Wrapper>
				</Wrapper>
				<Button onClick={buyProduct} style={{ border: '1px solid black' }} className="ph-2 mt-10" self="start" textProps={{ className: 'c-dark' }}>BUY NOW <Icon className="ml-3 c-dark" name="chevron-right" /></Button>
				<Text className="mt-5">We will redirect your purchase through our marketplace</Text>
			</View>
		</Wrapper>
	</Container>
}

export default Product