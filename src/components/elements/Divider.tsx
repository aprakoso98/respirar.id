import React from 'react';
import View, { ViewProps } from './View';

interface Props extends ViewProps {
	size?: number
}

const Space = ({ size = 10, style, ...rest }: Props) => {
	return <View style={{ margin: `${size}px 0`, ...style }} {...rest} />
}

const Divider = ({ className, size = 1, style, ...rest }: Props) => {
	return <View className={className || 'bg-greyHard'} style={{ padding: size / 2, ...style }} {...rest} />
}

export { Space, Divider }