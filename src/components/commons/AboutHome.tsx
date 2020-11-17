import React, { useEffect, useState } from 'react';
import Wrapper from '../elements/Wrapper';
import useWindowSize from '../../hooks/useWindowSize';
import Text from '../elements/Text';
import { useHistory } from 'react-router-dom';
import Icon from '../elements/Icon';
import View from '../elements/View';
import Image from '../elements/Image';
import Button from '../elements/Button';
import { FILE_PATH, getInfo } from 'src/utils/api';
import { parseAll } from 'src/utils/helper';

const AboutHome = () => {
	const history = useHistory()
	const [About, setAbout] = useState({
		description: '',
		image: ''
	})
	const [, , isMobile] = useWindowSize()
	const getData = async () => {
		const { status, data } = await getInfo({ key: 'about-home' })
		if (status) {
			// @ts-ignore
			setAbout(parseAll(data).aboutHome)
		}
	}
	useEffect(() => {
		getData()
	}, [])
	return <Wrapper direction={isMobile ? 'col-reverse' : 'row'} className={`bg-grey`} id="about">
		<View className={`relative ${isMobile ? 'pt-5 pb-25 ph-5' : 'pl-25'}`}>
			<View style={{ zIndex: 99 }} className={`${isMobile ? '' : 'w-1/2'}`}>
				<Text className="title">About Respirar</Text>
				<Text className="mr-5 mb-5 sub-title">{About.description}</Text>
				<Button className="b-1 bg-transparent" onClick={() => history.push('/about')} self="start">
					<Text className="mr-5 c-dark">Learn more</Text>
					<Icon name="chevron-right" className="c-dark" />
				</Button>
			</View>
			<View className={`${isMobile ? 'absolute r-0 b-0 w-2/3' : '-mt-10 w-1/2'}`}>
				<Image source={FILE_PATH + About.image} />
			</View>
		</View>
	</Wrapper>
}

export default AboutHome