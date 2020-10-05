import React from 'react';
import Button from '../elements/Button';
import Icon from '../elements/Icon';
import Image from '../elements/Image';
import Text from '../elements/Text';
import View from '../elements/View';
import Wrapper from '../elements/Wrapper';

const Footer = () => {
	return <View id="footer">
		<Wrapper className="description" items="start">
			<View className="w-1/6">
				<Image source={require('../../assets/images/Logo.png')} />
			</View>
			<View className="w-2/6">
				<Text className="title">Information</Text>
				<Text>WA Number</Text>
				<Text>0821-8088-2728</Text>
				<Text className="w-2/3">Jl. Sawo No. 15 Cipete Utara, Jakarta Selatan</Text>
			</View>
			<View className="w-1/6">
				<Text className="title">Links</Text>
				<Button className="link">ABOUT US</Button>
				<Button className="link">CATALOG</Button>
			</View>
			<View className="w-1/6">
				<Text className="title">Contacts</Text>
				<Text>082180882728</Text>
				<Text>respirar@gmail.com</Text>
				<Wrapper className="icon-wrapper" justify="start">
					<Icon name="facebook" />
					<Icon name="instagram" />
				</Wrapper>
			</View>
		</Wrapper>
		<Wrapper className="copyright" justify="center">
			<Icon className="color-light" name="copyright" />
			<Text className="color-light">2020 RESPIRAR</Text>
		</Wrapper>
	</View>
}

export default Footer