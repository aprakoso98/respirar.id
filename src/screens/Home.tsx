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

const Home = () => {
	return <Container id="home">
		<Banner />
		<Wrapper className="wrapper-card-home">
			<HomeCard image={require('../assets/images/Img-1.jpg')} />
			<HomeCard image={require('../assets/images/Img-2.jpg')} />
			<HomeCard image={require('../assets/images/Img-3.jpg')} />
		</Wrapper>
		<Wrapper className="background-grey" id="about">
			<View className="description w-1/2">
				<Text className="title color-blueSky">About Respirar</Text>
				<Text className="sub-title">In officia laboris ipsum laboris magna mollit Lorem. Eu exercitation aute aliqua ad. Nostrud aliquip nulla aliquip quis voluptate anim. Nulla anim veniam ad cillum adipisicing laboris amet et. Labore qui pariatur aliquip culpa laborum ut non. Nostrud anim consequat in consequat. Consectetur ipsum incididunt officia ea deserunt eu ad ea veniam Lorem est mollit.</Text>
				<Button self="start">
					<Text>Learn more</Text>
					<Icon name="chevron-right" />
				</Button>
			</View>
			<View className="wrapper-image w-1/2">
				<Image source={require('../assets/images/photo2.png')} />
			</View>
		</Wrapper>
	</Container>
}

export default Home