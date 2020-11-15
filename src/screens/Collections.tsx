import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'src/components/elements/Button';
import Container from 'src/components/elements/Container';
import Image from 'src/components/elements/Image';
import Linkdd from 'src/components/elements/Link';
import Text from 'src/components/elements/Text';
import View, { ViewProps } from 'src/components/elements/View';
import { useStateObject } from 'src/hooks/useState';
import useWindowSize from 'src/hooks/useWindowSize';
import { FILE_PATH, getProduct } from 'src/utils/api';
import { collectionType, screenProps } from 'src/utils/types';
import { priceRange, replaceSpaces } from '../utils/helper';

type Tyys = {
	[key: string]: collectionType[]
}

const Collections = (screen: screenProps): JSX.Element => {
	const { match: { params } } = screen
	const [, , isMobile] = useWindowSize()
	const [Categories, , initCategory] = useStateObject({} as Tyys)
	const getData = async () => {
		const { status, data } = await getProduct(params) as { status: boolean, data: collectionType[] }
		console.log(data)
		if (status) {
			const w = data.reduce((ret: Tyys, obj) => {
				ret[obj.kategori] = [...ret[obj.kategori] || [], obj]
				return ret
			}, {})
			console.log(w)
			initCategory(w)
		}
	}
	const effect = () => {
		getData()
	}
	useEffect(effect, [params])
	return <Container className={`${isMobile ? 'ph-5 mb-5' : 'ph-15 mb-10'}`}>
		{/* <Text className="title">Collections</Text> */}
		{/* @ts-ignore */}
		{params.search && <Text>Search result for : <Text className="ml-1 !Italic">{params.search}</Text></Text>}
		{Object.keys(Categories).rMap((key) => {
			const collections = Categories[key]
			return <>
				<Text className="c-blue title" self="center">{key}</Text>
				<View justify="between" wrap direction={isMobile ? 'col' : 'row'} className={`${isMobile ? '' : 'pl-25 pr-25'}`}>
					{collections.rMap((product) => <ProductView isMobile={isMobile} {...product} />)}
				</View>
			</>
		})}
	</Container>
}

export default Collections

const ProductView = ({ isMobile, image2, image, productName, productUrl, shortDescription, prices }: collectionType & { isMobile: boolean }) => {
	const history = useHistory()
	const [hover, setHover] = useState(false)
	const shadow: ViewProps['style'] = {
		WebkitBoxShadow: '0px 7px 23px 3px rgba(0,0,0,0.27)',
		MozBoxShadow: '0px 7px 23px 3px rgba(0,0,0,0.27)',
		boxShadow: '0px 7px 23px 3px rgba(0,0,0,0.27)'
	}
	return <View onClick={() => history.push(productUrl)} style={{transition:'.5s',...hover ? shadow : {}}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={`p-2 pointer ${isMobile ? '' : 'w-2/5'}`}>
		<View className="relative">
			<Image className="w-full" source={FILE_PATH + (hover ? image : image2)} />
			{hover && <Button textProps={{ className: 'c-light' }} style={{ bottom: 0 }} className="w-full absolute bg-blue-tr c-light">SHOP NOW</Button>}
		</View>
		<View className="pv-2">
			<Text className="f-5 c-dark">{productName}</Text>
			{/* <Text>{shortDescription}</Text> */}
			<Text className="c-blue">{priceRange(prices)}</Text>
		</View>
		{/* <Divider /> */}
	</View>
}