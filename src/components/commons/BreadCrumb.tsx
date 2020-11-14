import React from 'react';
import Wrapper from 'src/components/elements/Wrapper';
import Text from 'src/components/elements/Text';
import Button from 'src/components/elements/Button';
import { Divider } from 'src/components/elements/Divider';
import useWindowSize from 'src/hooks/useWindowSize';
import { screenProps } from 'src/utils/types';
import View from '../elements/View';
import { useHistory } from 'react-router-dom';

const BreadCrumb = (props: screenProps)=>{
	const history = useHistory()
	const paths = ["404", "about", "collections"]
	const { match: { params: { product } } } = props
	return <View>
	<Divider />
	<Wrapper wrap className={`pt-5 ${paths.includes(product) ? 'mb-3' : ''}`} justify="start">
		<Button textProps={{ className: '!Bold f-5' }} onClick={() => history.push('/')} className="f-5 link">Home</Button>
		<Text className="f-5 ph-2">/</Text>
		{!paths.includes(product) && <>
			<Button onClick={() => history.push('/collections')} textProps={{ className: '!Bold f-5' }} className="link">Collections</Button>
			<Text className="f-5 ph-2">/</Text>
		</>}
		<Text className="f-5">{product}</Text>
	</Wrapper>
</View>
}

export default BreadCrumb