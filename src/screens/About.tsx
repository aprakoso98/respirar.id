import React from 'react';
import Container from 'src/components/elements/Container';
import Icon from 'src/components/elements/Icon';
import Image from 'src/components/elements/Image';
import Text from 'src/components/elements/Text';
import View from 'src/components/elements/View';
import Wrapper from 'src/components/elements/Wrapper';
import { Space } from 'src/components/elements/Divider';

const About = () => {
	return <Container id="about">
		<Text>About Us</Text>
		<Wrapper items="start">
			<View>
				<Image source={require('../assets/images/Img-2.jpg')} />
			</View>
			<View>
				<Text>Respirar Breathe</Text>
				<Wrapper items="start">
					<Text>Minim consequat proident laborum sit laborum elit aute qui irure consequat in pariatur aute elit. In sunt aute sit ad dolore minim magna. Anim sit nulla mollit enim nostrud culpa deserunt consectetur anim nulla reprehenderit anim magna. Elit deserunt dolor voluptate id consectetur aliqua fugiat reprehenderit duis sint. Do enim eiusmod exercitation aute.</Text>
					<View>
						<Text><Icon name="home" />Our Store</Text>
						<Text>Jl. Sawo No. 15 Cipete Utara, Jakarta Selatan</Text>
						<Space />
						<Text>Phone : 082180882728</Text>
						<Text>Email : respirar@gmail.com</Text>
						<Space />
						<Space />
						<Text><Icon name="home" />Store Hours</Text>
						<Space />
						<Text>Monday-Saturday 11am-7pm</Text>
						<Text>Sunday 11am-6pm</Text>
					</View>
				</Wrapper>
			</View>
		</Wrapper>
		<View>
			<Text>Why shop with us</Text>
			<Wrapper>
				{[1, 2, 3].rMap(() => <View items="center">
					<Icon name="home" />
					<Text>Hight Quality Fabric</Text>
					<Text>Reprehenderit eu adipisicing ex adipisicing magna in non aute esse proident id. Consectetur ipsum occaecat dolor do consequat enim amet consequat sunt ipsum minim qui elit. Consequat ullamco nostrud sit sit deserunt dolor fugiat culpa. Exercitation enim dolor pariatur esse. Minim labore reprehenderit qui in qui et consequat ipsum velit aliquip voluptate amet esse. Officia ad ullamco pariatur fugiat fugiat aute irure reprehenderit qui incididunt labore pariatur. Occaecat elit velit qui excepteur proident id eiusmod ullamco minim anim ad eu cillum reprehenderit.</Text>
				</View>)}
			</Wrapper>
		</View>
		{[1, 2].rMap((i: number) => {
			return <Wrapper direction={i % 2 === 0 ? 'row-reverse' : 'row'}>
				<View>
					<Text>Ghsh jhsd</Text>
					<Text>Ex sunt ut deserunt nulla tempor eiusmod. Qui sit do culpa proident cillum do mollit. Labore magna qui fugiat nulla ex sint sunt. Adipisicing ea adipisicing esse qui officia.</Text>
					<View>
						<Text><Icon name="circle" />Officia deserunt do velit proident nostrud cupidatat nisi laborum commodo nulla.</Text>
						<Text><Icon name="circle" />Officia deserunt do velit proident nostrud cupidatat nisi laborum commodo nulla.</Text>
						<Text><Icon name="circle" />Officia deserunt do velit proident nostrud cupidatat nisi laborum commodo nulla.</Text>
						<Text><Icon name="circle" />Officia deserunt do velit proident nostrud cupidatat nisi laborum commodo nulla.</Text>
					</View>
				</View>
				<View>
					<Image source={require('../assets/images/Img-2.jpg')} />
				</View>
			</Wrapper>
		})}
	</Container>
}

export default About