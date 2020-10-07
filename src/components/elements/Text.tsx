import React from 'react';
import { ViewProps } from './View';
import Wrapper from './Wrapper';

interface Props extends ViewProps {
	children: React.ReactNode | string
	unsetPropsOnChildren?: boolean
}

const Text = ({ className = "", unsetPropsOnChildren, children, ...props }: Props) => {
	return <Wrapper className={`text ${className}`} justify="start" children={
		Array.isArray(children) ?
			children.rMap(
				(c: React.ReactElement | string) => typeof c === 'string' ?
					<Text {...unsetPropsOnChildren ? {} : props}>{c}</Text> :
					unsetPropsOnChildren ? c : React.cloneElement(c, props)
			) : children
	} {...props} />
}

export default Text