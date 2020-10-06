import React from 'react';
import View, { ViewProps } from './View';

const Space = ({ style, ...rest }: ViewProps) => {
	return <View style={{ margin: '10px 0', ...style }} {...rest} />
}

export { Space }