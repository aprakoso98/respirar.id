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
	return <Container>
		<Wrapper>
			<View>
				<Image source={require('../assets/images/Img-2.jpg')} />
			</View>
			<View>
				<Text>Lorem Ipsum</Text>
				<Text>Rp. 250.000</Text>
				<Space />
				<Space />
				<Wrapper>
					<Text>SKU : <Text>RSP-256</Text></Text>
					<Text>Avaibility : <Text>In Stock</Text></Text>
				</Wrapper>
				<Space />
				<Text>Enim laboris eiusmod reprehenderit voluptate est irure ipsum voluptate magna enim est consectetur. Excepteur ut ipsum ex deserunt deserunt excepteur officia cupidatat quis Lorem magna. Laborum et est ut ex esse in.</Text>
				<Space />
				<Space />
				<Wrapper>
					<Text>Sizes</Text>
					<Wrapper>
						<Text>S</Text>
						<Text>M</Text>
						<Text>L</Text>
						<Text>XL</Text>
					</Wrapper>
				</Wrapper>
				<Button>BUY NOW <Icon name="chevron-right" /></Button>
			</View>
		</Wrapper>
	</Container>
}

export default Product