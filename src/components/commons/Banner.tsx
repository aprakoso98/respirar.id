import React from 'react';
import ReactElasticCarousel from 'react-elastic-carousel';
import useWindowSize from 'src/hooks/useWindowSize';
import Button from '../elements/Button';
import Icon from '../elements/Icon';
import Image from '../elements/Image';
import View from '../elements/View';

const autoPlaySpeed = 3000

const Banner = () => {
	const [, , isMobile] = useWindowSize()
	return <View className={`${isMobile ? 'pb-5' : 'pb-10 ph-15'}`} id="banner">
		<ReactElasticCarousel
			enableAutoPlay
			pagination={false}
			autoPlaySpeed={autoPlaySpeed}
			className="relative"
			showArrows={!isMobile}
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
			<Image className="w-full" source={require('../../assets/images/Banner.jpg')} />
			<Image className="w-full" source={require('../../assets/images/Banner.jpg')} />
			<Image className="w-full" source={require('../../assets/images/Banner.jpg')} />
			<Image className="w-full" source={require('../../assets/images/Banner.jpg')} />
		</ReactElasticCarousel>
	</View>
}

export default Banner