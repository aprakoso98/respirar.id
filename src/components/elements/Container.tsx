import React from 'react';
import View, { ViewProps } from './View';

const Container = ({ className = "", children, ...rest }: ViewProps) => {
	return <View className={`container ${className}`} {...rest}>
		{children}
	</View>
}

export default Container