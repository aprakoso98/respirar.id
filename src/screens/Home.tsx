import React from 'react';
import Banner from 'src/components/commons/Banner';
import Container from 'src/components/elements/Container';
import HomeCard from 'src/components/commons/HomeCard';
import View from 'src/components/elements/View';
import Wrapper from 'src/components/elements/Wrapper';
import Image from 'src/components/elements/Image';
import Text from 'src/components/elements/Text';
import Button from 'src/components/elements/Button';
import Icon from 'src/components/elements/Icon';
import useWindowSize from '../hooks/useWindowSize';

const Home = () => {
	const [, , isMobile] = useWindowSize()
	return <Container className={isMobile ? '' : 'pt-5'} id="home">
		<Banner />
		{/* @ts-ignore */}
		<Wrapper wrap={isMobile} className={`${isMobile ? 'pb-5 ph-5' : 'pb-10 ph-15'}`}>
			<HomeCard className={`${isMobile ? '' : 'pv-2 pr-2'}`} image={require('../assets/images/Img-3.jpg')} />
			<HomeCard className={`${isMobile ? 'mt-2' : 'p-2'}`} image={require('../assets/images/Img-2.jpg')} />
			<HomeCard className={`${isMobile ? 'mt-2' : 'pv-2 pl-2'}`} image={require('../assets/images/Img-1.jpg')} />
		</Wrapper>
		<Wrapper direction={isMobile ? 'col-reverse' : 'row'} className={`bg-grey ${isMobile ? 'pv-5 ph-5' : 'ph-25'}`} id="about">
			<View className={`${isMobile ? '' : 'w-1/2'}`}>
				{!isMobile && <Text className="title">About Respirar</Text>}
				<Text className="mr-5 mb-5 sub-title">In officia laboris ipsum laboris magna mollit Lorem. Eu exercitation aute aliqua ad. Nostrud aliquip nulla aliquip quis voluptate anim. Nulla anim veniam ad cillum adipisicing laboris amet et. Labore qui pariatur aliquip culpa laborum ut non. Nostrud anim consequat in consequat. Consectetur ipsum incididunt officia ea deserunt eu ad ea veniam Lorem est mollit.</Text>
				<Button self="start">
					<Text className="mr-5">Learn more</Text>
					<Icon name="chevron-right" />
				</Button>
			</View>
			<View className={`${isMobile ? '' : '-mt-5 w-1/2'}`}>
				<Image source={require('../assets/images/photo2.png')} />
			</View>
			{/* {isMobile && <Text className="title">About Respirar</Text>} */}
		</Wrapper>
	</Container>
}

export default Home