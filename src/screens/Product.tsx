import React from 'react';
import Button from 'src/components/elements/Button';
import Container from 'src/components/elements/Container';
import { Space } from 'src/components/elements/Divider';
import Icon from 'src/components/elements/Icon';
import Image from 'src/components/elements/Image';
import Text from 'src/components/elements/Text';
import View from 'src/components/elements/View';
import Wrapper from 'src/components/elements/Wrapper';
import { screenProps } from 'src/utils/constants/type';

const Product = (props: screenProps) => {
	return <Container className="ph-15 pv-10">
		<Wrapper items="start">
			<View className="bg-blueSky w-2/5 mr-5">
				<Image source={require('../assets/images/Baju-3.png')} />
			</View>
			<View className="ml-5 w-3/5">
				<Text className="title f-10">Lorem Ipsum</Text>
				<Text className="f-3 mb-10">Rp. 250.000</Text>
				<Wrapper justify="start" className="mb-5">
					<Text className="mr-10">SKU : <Text>RSP-256</Text></Text>
					<Text>Avaibility : <Text>In Stock</Text></Text>
				</Wrapper>
				<Text className="mb-10">Enim laboris eiusmod reprehenderit voluptate est irure ipsum voluptate magna enim est consectetur. Excepteur ut ipsum ex deserunt deserunt excepteur officia cupidatat quis Lorem magna. Laborum et est ut ex esse in.</Text>
				<Wrapper justify="start">
					<Text className="mr-10">Sizes</Text>
					<Wrapper className="w-1/6">
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