import React from 'react';
import View, { ViewProps } from './View';

interface Props extends ViewProps {
	children: React.ReactNode | string
}

const Text = ({ children, ...props }: Props) => {
	return <View direction="row" children={
		Array.isArray(children) ?
			children.rMap(
				(c: React.ReactElement | string) => typeof c === 'string' ?
					<Text {...props}>{c}</Text> :
					React.cloneElement(c, props)
			) : children
	} {...props} />
}

export default Text