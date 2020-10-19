import React, { useEffect, useState } from 'react';
import Banner from 'src/components/commons/Banner';
import Container from 'src/components/elements/Container';
import HomeCard from 'src/components/commons/HomeCard';
import View from 'src/components/elements/View';
import Wrapper from 'src/components/elements/Wrapper';
import Image from 'src/components/elements/Image';
import Text from 'src/components/elements/Text';
import Button from 'src/components/elements/Button';
import Icon from 'src/components/elements/Icon';
import useWindowSize from '../hooks/useWindowSize';
import { getProduct } from '../utils/api';

const Home = () => {
	const [, , isMobile] = useWindowSize()
	const [products, setProducts] = useState([])
	const getData = async () => {
		const { status, data } = await getProduct({ highlight: true })
		if (status) {
			setProducts(data as [])
		}
	}
	useEffect(() => {
		getData()
	}, [getData])
	return <Container className={isMobile ? '' : 'pt-5'} id="home">
		<Banner />
		{/* @ts-ignore */}
		<View className={`${isMobile ? 'pb-5 ph-5' : 'pb-10 ph-15'}`}>
			<Wrapper wrap={isMobile} justify="center" className="-m-1">
				{products.rMap(product => {
					return <HomeCard className="m-1 bg-blue" {...product} />
				})}
			</Wrapper>
		</View>
		<Wrapper direction={isMobile ? 'col-reverse' : 'row'} className={`bg-grey ${isMobile ? 'pv-5 ph-5' : 'ph-25'}`} id="about">
			<View className={`${isMobile ? '' : 'w-1/2'}`}>
				{!isMobile && <Text className="title">About Respirar</Text>}
				<Text className="mr-5 mb-5 sub-title">In officia laboris ipsum laboris magna mollit Lorem. Eu exercitation aute aliqua ad. Nostrud aliquip nulla aliquip quis voluptate anim. Nulla anim veniam ad cillum adipisicing laboris amet et. Labore qui pariatur aliquip culpa laborum ut non. Nostrud anim consequat in consequat. Consectetur ipsum incididunt officia ea deserunt eu ad ea veniam Lorem est mollit.</Text>
				<Button self="start">
					<Text className="mr-5">Learn more</Text>
					<Icon name="chevron-right" />
				</Button>
			</View>
			<View className={`${isMobile ? '' : '-mt-5 w-1/2'}`}>
				<Image source={require('../assets/images/photo2.png')} />
			</View>
			{/* {isMobile && <Text className="title">About Respirar</Text>} */}
		</Wrapper>
	</Container>
}

export default Home