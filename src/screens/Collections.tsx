import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'src/components/elements/Button';
import Container from 'src/components/elements/Container';
import { Divider } from 'src/components/elements/Divider';
import Image from 'src/components/elements/Image';
import Text from 'src/components/elements/Text';
import View from 'src/components/elements/View';

const Collections = () => {
	const history = useHistory()
	return <Container className="ph-15 mb-10">
		<Text className="title">Collections</Text>
		<View direction="row" className="flex-wrap -m-2 pb-3 pt-10">
			{[1, 2, 3, 4, 5, 6, 7, 8].rMap(() => <View className="p-2 w-1/3">
				<View className="p-5 background-blueSky relative">
					<Image source={require('../assets/images/Baju-3.png')} />
					<Button className="absolute bg-blue c-light w-full l-0 b-0" onClick={() => history.push('/my-product')}>BUY NOW</Button>
				</View>
				<View className="pv-2">
					<Text>Anim et nisi incididunt esse et non.</Text>
					<Text className="c-blue">Rp. 250.000</Text>
				</View>
				<Divider />
			</View>)}
		</View>
	</Container>
}

export default Collections