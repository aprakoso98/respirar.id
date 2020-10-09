import React from 'react';
import useWindowSize from 'src/hooks/useWindowSize';
import Button from '../elements/Button';
import Icon from '../elements/Icon';
import Image from '../elements/Image';
import Text from '../elements/Text';
import View from '../elements/View';

const HomeCard = ({ className = "", image }: { image: string, className?: string }) => {
	const [, , isMobile] = useWindowSize()
	return <View className={`relative ${className}`}>
		<Image source={image} />
		<View justify="between" className={`absolute h-full ${isMobile ? 'p-10' : 'p-15'}`}>
			<Text className="-mt-5 title color-light">Fabric Refriba Technology</Text>
			<Button justify="between" self="start" onClick={() => alert('dfhgsjdfhghdsg')}>
				<Text className="mr-3">Learn More</Text>
				<Icon name="chevron-right" solid />
			</Button>
		</View>
	</View>
}

export default HomeCard