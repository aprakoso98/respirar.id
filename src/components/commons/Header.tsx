import React, { useState } from 'react';
import View from '../elements/View';
import Container from '../elements/Container';
import Wrapper from '../elements/Wrapper';
import Image from '../elements/Image';
import Button from '../elements/Button';
import Icon from '../elements/Icon';
import { useHistory } from 'react-router-dom';

const Header = () => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)
	const history = useHistory()
	const menu = [['/', 'Home'], ['/about', 'About Us'], ['/collections', 'Collections']]
	// @ts-ignore
	history.listen(({ pathname }) => setCurrentPath(pathname))
	return <Container className="pv-5 ph-15" id="header">
		<Wrapper>
			<View items="start" className="w-1/5">
				<Image source={require('../../assets/images/Logo.png')} />
			</View>
			<Wrapper justify="center" id="menu" className="w-3/5">
				{
					menu.rMap(([path, name]: string[]) => {
						return <Button onClick={() => history.push(path)} className={`${currentPath === path ? 'active' : ''} bg-transparent c-dark`}>{name}</Button>
					})
				}
			</Wrapper>
			<View items="end" className="w-1/5">
				<Icon name="search color-dark" />
			</View>
		</Wrapper>
	</Container>
}

export default Header