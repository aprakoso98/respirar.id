import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'src/components/elements/Button';
import Container from 'src/components/elements/Container';
import Icon from 'src/components/elements/Icon';
import Image from 'src/components/elements/Image';
import Text from 'src/components/elements/Text';
import View from 'src/components/elements/View';
import Wrapper from 'src/components/elements/Wrapper';
import { useStateArray, useStateObject } from 'src/hooks/useState';
import useWindowSize from 'src/hooks/useWindowSize';
import { getMarketplace, getProduct } from 'src/utils/api';
import { convertPath, convertPrices } from 'src/utils/helper';
import { marketplaceType, productMarketplaceType, producType, screenProps } from 'src/utils/types';

const Product = ({ match: { params } }: screenProps): JSX.Element => {
	const history = useHistory()
	const [, , isMobile] = useWindowSize()
	const [marketplaces, setMarketplaces] = useStateArray<marketplaceType[]>()
	const [state, setState] = useStateObject<{
		sizes?: string[],
		prices?: string[],
		marketplaces?: productMarketplaceType,
		selectedSize?: number,
	}>({})
	const [product, setProduct] = useStateObject<Partial<producType>>({})
	const getData = async () => {
		const { status, data } = await getProduct<producType>({ productUrl: params.product })
		if (status) {
			loadMarketplace()
			setProduct(data)
			setState({
				sizes: data.sizes.split('|'),
				selectedSize: 0,
				prices: convertPrices(data.prices)
			})
		} else {
			history.push('/404')
		}
	}
	const buyProduct = async () => {
	}
	const loadMarketplace = async () => {
		const marketplaces = JSON.parse(product.marketplaces || '{}')
		const { status, data } = await getMarketplace<marketplaceType[]>()
		if (status) {
			setMarketplaces(data)
		}
	}
	const effect = () => {
		getData()
	}
	useEffect(effect, [])
	return <Container className={`${isMobile ? 'ph-5 pv-5' : 'ph-15 pv-10'}`}>
		<Wrapper direction={isMobile ? 'col' : 'row'} items="start">
			<View className={`bg-blueSky ${isMobile ? '' : 'w-2/5 mr-5'}`}>
				<Image source={product.image ? convertPath(product.image) : require('../assets/images/product-thumb.png')} />
			</View>
			<View className={`${isMobile ? '' : 'ml-5 w-3/5'}`}>
				<Text className="title f-10">{product.productName}</Text>
				<Text className="f-3 mb-10">{state.prices && state.prices[state.selectedSize || 0]}</Text>
				<Wrapper justify={isMobile ? 'between' : 'start'} className="mb-5">
					<Wrapper className={`${isMobile ? '' : 'mr-5'}`}>
						<Text>SKU :</Text>
						<Text className="ml-1">{product.sku}</Text>
					</Wrapper>
					<Wrapper>
						<Text>Avaibility :</Text>
						<Text className="ml-1">{product.availability}</Text>
					</Wrapper>
				</Wrapper>
				<Text className="mb-10">{product.description}</Text>
				<Wrapper justify={isMobile ? 'between' : 'start'}>
					<Text className="mr-10">Sizes</Text>
					<Wrapper className={`${isMobile ? 'w-1/3' : 'w-1/6'}`}>
						{state.sizes && state.sizes.rMap(
							(size: string, index: number) => <Button
								className={index === state.selectedSize ? 'b-1 brd-1' : ''}
								onClick={() => setState({ selectedSize: index })}>{size}</Button>
						)}
					</Wrapper>
				</Wrapper>
				<Button onClick={buyProduct} style={{ border: '1px solid' }} className="ph-2 mt-10" self="start" >BUY NOW <Icon className="ml-3" name="chevron-right" /></Button>
			</View>
		</Wrapper>
	</Container>
}

export default Product