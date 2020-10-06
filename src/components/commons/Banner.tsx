import React from 'react';
import ReactElasticCarousel from 'react-elastic-carousel';
import Button from '../elements/Button';
import Icon from '../elements/Icon';
import Image from '../elements/Image';
import View from '../elements/View';

let autoPlaySpeed = 3000

const Banner = () => {
	return <View id="banner">
		<ReactElasticCarousel
			enableAutoPlay
			pagination={false}
			autoPlaySpeed={autoPlaySpeed}
			className="relative"
			renderArrow={({ type, onClick }) => {
				const style = {
					...type === 'NEXT' ? { right: 25 } : { left: 25 },
					top: '45%',
					zIndex: 9
				}
				return <Button style={style} onClick={onClick} className="link absolute">
					<Icon style={{ fontSize: 50 }} className="color-light" name={type === 'NEXT' ? 'arrow-right' : 'arrow-left'} />
				</Button>
			}}
		>
			<Image source={require('../../assets/images/Banner.jpg')} />
			<Image source={require('../../assets/images/Banner.jpg')} />
			<Image source={require('../../assets/images/Banner.jpg')} />
			<Image source={require('../../assets/images/Banner.jpg')} />
		</ReactElasticCarousel>
	</View>
}

export default Banner