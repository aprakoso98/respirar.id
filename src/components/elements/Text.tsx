import React, { ReactElement } from 'react';
import { ViewProps } from './View';
import Wrapper from './Wrapper';

export type textChild = string | ReactElement | JSX.Element

export interface TextProps extends Omit<ViewProps, 'children'> {
	text?: 'center' | 'left' | 'right' | 'justify'
	children?: textChild | textChild[]
	unsetPropsOnChildren?: boolean
}

const Text = ({ unsetPropsOnChildren, className, text, children, ...props }: TextProps): ReactElement => {
	// @ts-ignore
	return <Wrapper idComponent="text" className={`${text ? 'text-' + text : ''} ${className}`} justify="start" children={
		Array.isArray(children) ?
			children.rMap(
				(child: textChild) => typeof child === 'string' ?
					<Text {...unsetPropsOnChildren ? {} : props}>{child}</Text> :
					unsetPropsOnChildren ? child : React.cloneElement(child, props)
			) : children
	} {...props} />
}

export default Text