import React, { useEffect, useState } from 'react';
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
		aboutDescription: '',
		aboutWhyShopText: '',
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
	useEffect(() => console.log(Content.aboutDescription), [Content.aboutDescription])
	useEffect(effect, [])
	return <Container id="about">
		<Divider />
		<BreadCrumb className={`${isMobile ? 'ph-5 mv-3' : 'ph-15 mt-5 mb-10'}`} links={[{ name: 'About us' }]} />
		<Text className={`${isMobile ? 'ph-5' : 'ph-15'} title`}>About Us</Text>
		<Wrapper direction={isMobile ? 'col' : 'row'} className={`${isMobile ? 'ph-5 pv-5' : 'ph-15 pv-10'}`} items="start">
			<View className={`${isMobile ? 'mb-2' : 'w-1/2'}`}>
				<Content.aboutImage />
			</View>
			<View className={`${isMobile ? '' : 'ml-10 mrr-5 w-1/2'}`}>
				<Text className={`title ${isMobile ? 'mv-5' : 'mb-5'}`}>{Content.aboutTitle}</Text>
				<Wrapper items="start">
					<View className={`${true ? 'w-full' : "w-2/3"}`}>{Content.aboutDescription}</View>
					{false && <View className="ml-5 w-1/3">
						<Text unsetPropsOnChildren className="c-dark mb-1 c-dark f-1">
							<Icon className="mr-2 c-blue" name="home" />
							<Text className="c-dark">Our Store</Text>
						</Text>
						<Text className="c-dark mb-3">{Content.aboutAddress}</Text>
						{/* @ts-ignore */}
						<Text><Text className="c-dark">Phone : </Text>{<Content.aboutPhone className={isMobile ? '' : 'c-dark ml-1'} />}</Text>
						{/* @ts-ignore */}
						<Text><Text className="c-dark">Email : </Text>{<Content.aboutEmail className={isMobile ? '' : 'c-dark ml-1'} />}</Text>
						<Text unsetPropsOnChildren className="c-dark mt-5 mb-1 c-dark f-1"><Icon className="mr-2 c-blue" name="clock" /><Text className="c-dark">Store Hours</Text></Text>
						{Content.aboutHours.rMap(hours => {
							return <Text className="c-dark">{hours}</Text>
						})}
					</View>}
				</Wrapper>
			</View>
		</Wrapper>
		<View className={`${isMobile ? 'ph-5 pv-5' : 'ph-15 pv-10'}`}>
			<Text justify="center" align="center" className={`title ${isMobile ? 'mb-5' : 'mb-10'}`}>{Content.aboutWhyShopText}</Text>
			<Wrapper direction={isMobile ? 'row' : 'row'} justify="center" wrap className="-m-2">
				{Content.aboutWhyShop.rMap(({ icon, title }) => <View className={`p-2 ${isMobile ? 'w-1/2' : 'w-1/3'}`}>
					<View className={`bg-light text-center ${isMobile ? 'ph-1 pt-5' : 'ph-5 pt-10 pb-5'} card-excellence`} items="center">
						{/* <Icon className="f-20 c-blue" name={icon} /> */}
						<Image className={isMobile ? 'w-1/2' : 'w-1/6'} source={FILE_PATH + icon} />
						{/* @ts-ignore */}
						<Text align="center" style={{ minHeight: 50, maxHeight: 50 }} className={`${isMobile ? 'f-0' : 'f-5 mh-5'} mt-5 title`}>{title}</Text>
						{/* <Text align="center">{description}</Text> */}
					</View>
				</View>)}
			</Wrapper>
		</View>
		<AboutList list={about} />
	</Container>
}

export default About