import React from 'react';
import Button from '../elements/Button';
import Icon from '../elements/Icon';
import Image from '../elements/Image';
import Text from '../elements/Text';
import View from '../elements/View';

const HomeCard = ({ className = "", image }: { image: string, className?: string }) => {
	return <View className={`relative ${className}`}>
		<Image source={image} />
		<View justify="between" className="absolute h-full p-15">
			<Text className="-mt-5 title color-light">Fabric Refriba Technology</Text>
			<Button justify="between" self="start" onClick={() => alert('dfhgsjdfhghdsg')}>
				<Text className="mr-3">Learn More</Text>
				<Icon name="chevron-right" solid />
			</Button>
		</View>
	</View>
}

export default HomeCard