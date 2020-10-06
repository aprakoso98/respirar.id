import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'src/components/elements/Button';
import Container from 'src/components/elements/Container';
import Image from 'src/components/elements/Image';
import Text from 'src/components/elements/Text';
import View from 'src/components/elements/View';

const Collections = () => {
	const history = useHistory()
	return <Container>
		<Text>Collections</Text>
		<View direction="row" className="flex-wrap">
			{[1, 2, 3, 4, 5, 6, 7].rMap(() => <View className="w-1/2">
				<View>
					<Image source={require('../assets/images/Img-3.jpg')} />
					<Button onClick={() => history.push('/my-product')}>BUY NOW</Button>
				</View>
				<Text>Anim et nisi incididunt esse et non.</Text>
				<Text>Rp. 250.000</Text>
			</View>)}
		</View>
	</Container>
}

export default Collections