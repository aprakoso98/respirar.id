import React from 'react';
import View, { ViewProps } from './View';

interface WrapperProps extends ViewProps { }

const Wrapper = ({ idComponent = "wrapper", items = "center", children, ...rest }: WrapperProps) => {
	return <View justify="between" items={items} idComponent={idComponent} direction="row" {...rest}>
		{children}
	</View>
}

export default Wrapper