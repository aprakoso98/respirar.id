import React, { HTMLAttributes } from 'react';

export interface ImageProps extends HTMLAttributes<HTMLImageElement> {
	source: string
}

const Image = ({ className = "", source, ...rest }: ImageProps) => {
	// tadinya punya class flex
	return <img {...rest} alt="" component-id="image" className={`${className}`} src={source} />
}

export default Image