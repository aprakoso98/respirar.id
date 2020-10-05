import React from 'react';
import { ViewProps } from './View';

interface Props extends ViewProps {
	children: string
}

const Text = ({ className = "", children, ...rest }: Props) => {
	return <div className={`text ${className}`} {...rest}>{children}</div>
}

export default Text