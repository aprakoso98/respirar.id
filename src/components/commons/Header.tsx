import React from 'react';
import View from '../elements/View';
import Container from '../elements/Container';
import Wrapper from '../elements/Wrapper';
import Image from '../elements/Image';
import Button from '../elements/Button';
import Icon from '../elements/Icon';

const Header = () => {
	return <Container id="header">
		<Wrapper>
			<View items="start" className="w-1/4">
				<Image source={require('../../assets/images/Logo.png')} />
			</View>
			<Wrapper justify="center" id="menu" className="w-2/4">
				<Button className="active link">Home</Button>
				<Button className="link">About Us</Button>
				<Button className="link">Collections</Button>
			</Wrapper>
			<View items="end" className="w-1/4">
				<Icon name="search color-dark" />
			</View>
		</Wrapper>
	</Container>
}

export default Header