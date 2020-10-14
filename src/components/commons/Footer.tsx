import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useWindowSize from 'src/hooks/useWindowSize';
import Button from '../elements/Button';
import { Divider } from '../elements/Divider';
import Icon from '../elements/Icon';
import Image from '../elements/Image';
import Text from '../elements/Text';
import View from '../elements/View';
import Wrapper from '../elements/Wrapper';

const Footer = () => {
	const [isHome, setIsHome] = useState(window.location.pathname === '/')
	const history = useHistory()
	const [, , isMobile] = useWindowSize()
	// @ts-ignore
	history.listen(({ pathname }) => setIsHome(pathname === '/'))
	return <>
		{!isHome && <Divider />}
		<View className={`${isMobile ? 'pt-5' : 'pt-10 ph-15'} bg-light`} id="footer">
			<Wrapper direction={isMobile ? 'col' : 'row'} className={`${isMobile ? 'mb-10 ph-5' : 'mb-15 ph-10'}`} items={isMobile ? 'center' : 'start'}>
				<View  className={`${isMobile ? 'w-1/2 mt-2' : 'w-1/6'}`}>
					<Image source={require('../../assets/images/Logo.png')} />
				</View>
				<View items={isMobile ? 'center' : undefined} className={`${isMobile ? 'w-full mt-2' : 'w-2/6'}`}>
					<Text className="c-blue mb-5">Information</Text>
					<Text>WA Number</Text>
					<Text className="f-10 mt-2">0821-8088-2728</Text>
					<Text>Jl. Sawo No. 15 Cipete Utara, Jakarta Selatan</Text>
				</View>
				<View items={isMobile ? 'center' : undefined} className={`${isMobile ? 'w-full mt-2' : 'w-1/6'}`}>
					<Text className="c-blue mb-5">Links</Text>
					<Button onClick={() => history.push('/about')} className="link">ABOUT US</Button>
					<Button onClick={() => history.push('/collections')} className="link">COLLECTIONS</Button>
				</View>
				<View items={isMobile ? 'center' : undefined} className={`${isMobile ? 'w-full mt-2' : 'w-1/6'}`}>
					<Text className="c-blue mb-5">Contacts</Text>
					<Text>082180882728</Text>
					<Text>respirar@gmail.com</Text>
					<Wrapper className="mt-2" justify="start">
						<Icon className="f-20 mr-5 color-blue" name="facebook" />
						<Icon className="f-20 color-blue" name="instagram" />
					</Wrapper>
				</View>
			</Wrapper>
			<Wrapper className="bg-blue pv-3" justify="center">
				<Icon className="color-light" name="copyright" />
				<Text className="color-light">2020 RESPIRAR</Text>
			</Wrapper>
		</View>
	</>
}

export default Footer