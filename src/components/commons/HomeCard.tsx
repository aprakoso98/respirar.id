import React from 'react';
import useWindowSize from 'src/hooks/useWindowSize';
import { FILE_PATH } from 'src/utils/api';
import { HighlightType } from 'src/utils/types';
import Image from '../elements/Image';
import Text from '../elements/Text';
import View from '../elements/View';
import Link from '../elements/Link';

type Props = HighlightType & {
	className?: string
}

const HomeCard = ({ name, redirect, className = "", image }: Props) => {
	const [, , isMobile] = useWindowSize()
	console.log(name, decodeURI(name))
	return <Link href={redirect} className={`relative ${isMobile ? 'w-1/2 p-1' : 'w-1/3'} ${className}`}>
		<Image source={FILE_PATH + image} />
		<View justify="center" items="center" className="t-0 pv-5 ph-5 absolute w-full h-full">
			<View>
				{name.split('~').rMap(txt => <Text self="center" className={`${isMobile?'f-0':'f-20'} color-light !Display-Medium ${txt ? '' : 'h-5'}`}>{txt}</Text>)}
			</View>
			{/* <Text text="center" className="title color-light"><pre>{decodeURI(name)}</pre></Text> */}
			{/* <Button justify="between" self="start" onClick={() => history.push(redirect)}>
					<Text className="mr-3">{btnText || 'Learn More'}</Text>
					<Icon name="chevron-right" solid />
				</Button> */}
		</View>
	</Link>
}

export default HomeCard