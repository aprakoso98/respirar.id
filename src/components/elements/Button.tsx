import React from 'react';
import { ViewProps } from './View';
import Wrapper from './Wrapper';

interface ButtonProps extends ViewProps {
	children?: React.ReactNode | string
}

const Button = ({ children, justify, className = "", ...rest }: ButtonProps) => {
	return <Wrapper justify={justify ? justify : typeof children === 'string' ? 'center' : 'between'} className={`button pointer ${className}`} {...rest}>
		{children}
	</Wrapper>
}

export default Button