import React from 'react';
import Button from 'src/components/elements/Button';
import Container from 'src/components/elements/Container';
import Icon from 'src/components/elements/Icon';
import Image from 'src/components/elements/Image';
import Text from 'src/components/elements/Text';
import View from 'src/components/elements/View';
import Wrapper from 'src/components/elements/Wrapper';
import useWindowSize from 'src/hooks/useWindowSize';
import { screenProps } from 'src/utils/constants/type';

const Product = (props: screenProps) => {
	const [, , isMobile] = useWindowSize()
	return <Container className={`${isMobile ? 'ph-5 pv-5' : 'ph-15 pv-10'}`}>
		<Wrapper direction={isMobile ? 'col' : 'row'} items="start">
			<View className={`bg-blueSky ${isMobile ? '' : 'w-2/5 mr-5'}`}>
				<Image source={require('../assets/images/Baju-3.png')} />
			</View>
			<View className={`${isMobile ? '' : 'ml-5 w-3/5'}`}>
				<Text className="title f-10">Lorem Ipsum</Text>
				<Text className="f-3 mb-10">Rp. 250.000</Text>
				<Wrapper justify={isMobile ? 'between' : 'start'} className="mb-5">
					<Wrapper className={`${isMobile ? '' : 'mr-5'}`}>
						<Text>SKU :</Text>
						<Text className="ml-1">RSP-256</Text>
					</Wrapper>
					<Wrapper>
						<Text>Avaibility :</Text>
						<Text className="ml-1">In Stock</Text>
					</Wrapper>
				</Wrapper>
				<Text className="mb-10">Enim laboris eiusmod reprehenderit voluptate est irure ipsum voluptate magna enim est consectetur. Excepteur ut ipsum ex deserunt deserunt excepteur officia cupidatat quis Lorem magna. Laborum et est ut ex esse in.</Text>
				<Wrapper justify={isMobile ? 'between' : 'start'}>
					<Text className="mr-10">Sizes</Text>
					<Wrapper className={`${isMobile ? 'w-1/3' : 'w-1/6'}`}>
						<Text>S</Text>
						<Text>M</Text>
						<Text>L</Text>
						<Text>XL</Text>
					</Wrapper>
				</Wrapper>
				<Button style={{ border: '1px solid' }} className="ph-2 mt-10" self="start" >BUY NOW <Icon className="ml-3" name="chevron-right" /></Button>
			</View>
		</Wrapper>
	</Container>
}

export default Product