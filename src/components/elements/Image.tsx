import React, { HTMLAttributes } from 'react';

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
	source: string
}

const Image = ({ className = "", source, ...rest }: ImageProps) => {
	return <img {...rest} alt="" className={`flex ${className}`} src={source} />
}

export default Image