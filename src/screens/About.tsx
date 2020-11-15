import React, { useEffect, useState } from 'react';
import HtmlParser from 'react-html-parser';
import BreadCrumb from 'src/components/commons/BreadCrumb';
import Container from 'src/components/elements/Container';
import { Divider } from 'src/components/elements/Divider';
import Icon from 'src/components/elements/Icon';
import Image from 'src/components/elements/Image';
import Text from 'src/components/elements/Text';
import View from 'src/components/elements/View';
import Wrapper from 'src/components/elements/Wrapper';
import useWindowSize from 'src/hooks/useWindowSize';
import { FILE_PATH, getAbout, getInfo } from 'src/utils/api';
import { parseAll } from 'src/utils/helper';
import AboutList from '../components/commons/AboutList';

const About = () => {
	const [, , isMobile] = useWindowSize()
	const [about, setAbout] = useState([])
	const [Content, setContent] = useState({
		aboutTitle: '',
		aboutAddress: '',
		aboutDescription: HtmlParser(''),
		aboutWhyShop: [],
		aboutHours: [],
		aboutImage: () => null,
		aboutPhone: () => null,
		aboutEmail: () => null,
	})
	const getData = async () => {
		const { status, data } = await getAbout()
		const { data: contentData } = await getInfo()
		// @ts-ignore
		setContent(parseAll(contentData))
		if (status) {
			setAbout(data as [])
		}
	}
	const effect = () => {
		getData()
	}
	useEffect(effect, [])
	return <Container id="about">
		<Divider />
		<BreadCrumb className={`${isMobile ? 'ph-5' : 'ph-15'} mt-5 mb-10`} links={[{ name: 'About us' }]} />
		<Text className={`${isMobile ? 'ph-5' : 'ph-15'} title`}>About Us</Text>
		<Wrapper direction={isMobile ? 'col' : 'row'} className={`${isMobile ? 'ph-5 pv-5' : 'ph-15 pv-10'}`} items="start">
			{isMobile && <Text align="center" justify="center" className="title">{Content.aboutTitle}</Text>}
			<View className={`${isMobile ? 'mb-2' : 'w-1/3'}`}>
				<Content.aboutImage />
			</View>
			<View className={`${isMobile ? '' : 'ml-10 mr-5 w-2/3'}`}>
				{!isMobile && <Text className="title">Respirar Breathe</Text>}
				<Wrapper items="start">
					<View className="w-2/3">{Content.aboutDescription}</View>
					<View className="ml-5 w-1/3">
						<Text unsetPropsOnChildren className="mb-1 c-dark f-1"><Icon className="mr-2 c-blue" name="home" />Our Store</Text>
						<Text className="mb-3">{Content.aboutAddress}</Text>
						{/* @ts-ignore */}
						<Text replaceClass={isMobile}>Phone : {<Content.aboutPhone className={isMobile ? '' : 'ml-1'} />}</Text>
						{/* @ts-ignore */}
						<Text replaceClass={isMobile}>Email : {<Content.aboutEmail className={isMobile ? '' : 'ml-1'} />}</Text>
						<Text unsetPropsOnChildren className="mt-5 mb-1 c-dark f-1"><Icon className="mr-2 c-blue" name="clock" />Store Hours</Text>
						{Content.aboutHours.rMap(hours => {
							return <Text>{hours}</Text>
						})}
					</View>
				</Wrapper>
			</View>
		</Wrapper>
		<View className={`${isMobile ? 'ph-5 pv-5' : 'ph-15 pv-10'}`}>
			<Text justify="center" align="center" className={`title ${isMobile ? '' : 'mb-10'}`}>Why shop with us</Text>
			<Wrapper direction={isMobile ? 'col' : 'row'} justify="center" wrap className="-m-2">
				{Content.aboutWhyShop.rMap(({ icon, title, description }) => <View className={`p-2 ${isMobile ? '' : 'w-1/3'}`}>
					<View className="bg-light ph-5 pt-10 pb-5 card-excellence" items="center">
						{/* <Icon className="f-20 c-blue" name={icon} /> */}
						<Image className="w-1/4" source={FILE_PATH + icon} />
						{/* @ts-ignore */}
						<Text align="center" style={{ minHeight: 72, maxHeight: 72 }} className={`f-10 mh-5 mt-5 title`}>{title}</Text>
						{/* <Text align="center">{description}</Text> */}
					</View>
				</View>)}
			</Wrapper>
		</View>
		<AboutList list={about} />
	</Container>
}

export default About