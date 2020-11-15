import React from 'react';
import Wrapper from 'src/components/elements/Wrapper';
import Text from 'src/components/elements/Text';
import { ViewProps } from '../elements/View';
import { Link } from 'react-router-dom';

type Props = ViewProps & {
	size?: string
	links: {
		name: string, redirect?: string
	}[]
}

const BreadCrumb = ({ links, size = '5', ...rest }: Props) => {
	links = [{ name: 'Home', redirect: '/' }, ...links]
	return <Wrapper wrap justify="start" {...rest}>
		{links.rMap(({ name, redirect }, i) => <>
			{redirect ? <Link className={`!Bold c-dark pointer f-${size}`} to={redirect}>{name}</Link> : <Text className={`c-dark f-${size}`}>{name}</Text>}
			{i < links.length - 1 && <Text className={`c-dark f-${size} ph-2`}>/</Text>}
		</>)}
	</Wrapper>
}

export default BreadCrumb