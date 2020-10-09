import React from 'react';
import { ViewProps } from './View';
import Wrapper from './Wrapper';

interface ButtonProps extends ViewProps {
	children?: React.ReactNode | string
}

const Button = ({ replaceClass, children, justify, className = "", ...rest }: ButtonProps) => {
	return <Wrapper
		justify={justify ? justify : typeof children === 'string' ? 'center' : 'between'}
		className={`button pointer ${replaceClass ? '' : 'ph-5 pv-2'} ${className}`} {...rest}>
		{children}
	</Wrapper>
}

export default Button