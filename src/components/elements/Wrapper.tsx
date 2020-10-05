import React from 'react';
import View, { ViewProps } from './View';

interface WrapperProps extends ViewProps { }

const Wrapper = ({ items = "center", className = "", children, ...rest }: WrapperProps) => {
	return <View justify="between" items={items} className={`wrapper ${className}`} direction="row" {...rest}>
		{children}
	</View>
}

export default Wrapper