import React from 'react';
import Button from '../elements/Button';
import Icon from '../elements/Icon';
import Image from '../elements/Image';
import Text from '../elements/Text';
import View from '../elements/View';

const HomeCard = ({ image }: { image: string }) => {
	return <View className="card-home">
		<Image source={image} />
		<View justify="between" className="content">
			<Text className="title">Fabric Refriba Technology</Text>
			<Button justify="between" onClick={() => alert('dfhgsjdfhghdsg')}>
				<Text>Learn More</Text>
				<Icon name="chevron-right" solid />
			</Button>
		</View>
	</View>
}

export default HomeCard