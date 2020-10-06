import React from 'react';
import View from '../elements/View';
import Container from '../elements/Container';
import Wrapper from '../elements/Wrapper';
import Image from '../elements/Image';
import Button from '../elements/Button';
import Icon from '../elements/Icon';
import { useHistory } from 'react-router-dom';

const Header = () => {
	const history = useHistory()
	return <Container id="header">
		<Wrapper>
			<View items="start" className="w-1/5">
				<Image source={require('../../assets/images/Logo.png')} />
			</View>
			<Wrapper justify="center" id="menu" className="w-3/5">
				<Button onClick={() => history.push('/')} className="active link">Home</Button>
				<Button onClick={() => history.push('/about')} className="link">About Us</Button>
				<Button onClick={() => history.push('/collections')} className="link">Collections</Button>
			</Wrapper>
			<View items="end" className="w-1/5">
				<Icon name="search color-dark" />
			</View>
		</Wrapper>
	</Container>
}

export default Header