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
		<Text className="ph-15 title">About Us</Text>
		<Wrapper className="ph-15 pv-10" items="start">
			<View className="w-1/3">
				<Image source={require('../assets/images/Img-2.jpg')} />
			</View>
			<View className="ml-10 mr-5 w-2/3">
				<Text className="title">Respirar Breathe</Text>
				<Wrapper items="start">
					<Text unsetPropsOnChildren direction="col" className="w-2/3">Minim consequat proident laborum sit laborum elit aute qui irure consequat in pariatur aute elit. In sunt aute sit ad dolore minim magna. Anim sit nulla mollit enim nostrud culpa deserunt consectetur anim nulla reprehenderit anim magna. Elit deserunt dolor voluptate id consectetur aliqua fugiat reprehenderit duis sint. Do enim eiusmod exercitation aute. <br />Ullamco quis eiusmod Lorem commodo quis amet fugiat voluptate deserunt nulla ea est ullamco elit. Ullamco eu nostrud irure est Lorem amet. Id est sint et velit amet sint labore amet qui occaecat adipisicing sint anim. Aute deserunt duis id qui elit elit ex nostrud sint id laborum et eu excepteur. Aliquip ullamco officia eu aliquip commodo magna anim cillum.</Text>
					<View className="ml-5 w-1/3">
						<Text unsetPropsOnChildren className="c-dark f-1"><Icon className="mr-2 c-blue" name="home" />Our Store</Text>
						<Text>Jl. Sawo No. 15 Cipete Utara, Jakarta Selatan</Text>
						<Text>Phone : 082180882728</Text>
						<Text>Email : respirar@gmail.com</Text>
						<Text unsetPropsOnChildren className="c-dark f-1"><Icon className="mr-2 c-blue" name="home" />Store Hours</Text>
						<Text>Monday-Saturday 11am-7pm</Text>
						<Text>Sunday 11am-6pm</Text>
					</View>
				</Wrapper>
			</View>
		</Wrapper>
		<View className="ph-15 pv-10">
			<Text justify="center" className="title mb-10">Why shop with us</Text>
			<Wrapper className="-m-2">
				{[1, 2, 3].rMap(() => <View className="p-2">
					<View className="bg-light ph-5 pv-10 card-excellence" items="center">
						<Icon className="f-20 c-blue" name="home" />
						<Text align="center" className="f-10 mt-5 mb-2 title">Hight Quality Fabric</Text>
						<Text align="center">Reprehenderit eu adipisicing ex adipisicing magna in non aute esse proident id. Consectetur ipsum occaecat dolor do consequat enim amet consequat sunt ipsum minim qui elit. Consequat ullamco nostrud sit sit deserunt dolor fugiat culpa. Exercitation enim dolor pariatur esse.</Text>
					</View>
				</View>)}
			</Wrapper>
		</View>
		{[1, 2].rMap((i: number) => {
			const isOdd = i % 2 === 0
			return <Wrapper className="mh-15 mv-10" direction={isOdd ? 'row-reverse' : 'row'}>
				<View className={`w-2/3 ${isOdd ? 'pl-5' : 'pr-5'}`}>
					<Text className="title">Ghsh jhsd</Text>
					<Text>Ex sunt ut deserunt nulla tempor eiusmod. Qui sit do culpa proident cillum do mollit. Labore magna qui fugiat nulla ex sint sunt. Adipisicing ea adipisicing esse qui officia.</Text>
					<Space />
					<View>
						<Text><Icon className="li-item" name="circle" />Officia deserunt do velit proident nostrud cupidatat nisi laborum commodo nulla.</Text>
						<Text><Icon className="li-item" name="circle" />Officia deserunt do velit proident nostrud cupidatat nisi laborum commodo nulla.</Text>
						<Text><Icon className="li-item" name="circle" />Officia deserunt do velit proident nostrud cupidatat nisi laborum commodo nulla.</Text>
						<Text><Icon className="li-item" name="circle" />Officia deserunt do velit proident nostrud cupidatat nisi laborum commodo nulla.</Text>
					</View>
				</View>
				<View className={`w-1/3 ${isOdd ? 'pr-5' : 'pl-5'}`}>
					<Image source={isOdd ? require('../assets/images/Plant.png') : require('../assets/images/Img-1.jpg')} />
				</View>
			</Wrapper>
		})}
	</Container>
}

export default About