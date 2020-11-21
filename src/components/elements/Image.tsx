import React from 'react';
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

export interface ImageProps extends LazyLoadImageProps {
	source: string
}

const Image = ({ className = "", source, ...rest }: ImageProps) => {
	// tadinya punya class flex
	// return <img {...rest} alt="" component-id="image" className={`${className}`} src={source} />
	return <LazyLoadImage wrapperClassName={className} alt="" component-id="image" effect="blur" {...rest} src={source} />
}

export default Image