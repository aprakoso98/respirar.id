import React, { HTMLAttributes } from 'react';
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type ImgProps = { source?: string }
export type ImageProps = LazyLoadImageProps & ImgProps
export type PureImageProps = HTMLAttributes<HTMLImageElement> & ImgProps

const Image = ({ className = "", source, ...rest }: ImageProps) => {
	// tadinya punya class flex
	return <LazyLoadImage wrapperClassName={className} alt="" component-id="image" effect="blur" {...rest} src={source} />
}

export const PureImage = ({ className = "", source, ...rest }: PureImageProps) => {
	// tadinya punya class flex
	return <img {...rest} alt="" component-id="image" className={`${className}`} src={source} />
}

export default Image