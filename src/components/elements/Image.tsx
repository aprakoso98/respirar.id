import React, { HTMLAttributes } from 'react';
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import useLongPress from 'src/hooks/useLongPress';
import useWindowSize from 'src/hooks/useWindowSize';
import { modal } from 'src/redux/actions/modal';

type ImgProps = { preview?: boolean, source?: string }
export type ImageProps = LazyLoadImageProps & ImgProps
export type PureImageProps = HTMLAttributes<HTMLImageElement> & ImgProps

const Image = ({ preview, className = "", source, ...rest }: ImageProps) => {
	// tadinya punya class flex
	const [width, height, isMobile] = useWindowSize()
	const maxWidth = width / (isMobile ? 1.25 : 2)
	const maxHeight = height / 1.15
	const longPressEvent = useLongPress(() => null, () => modal.show().setContent(<PureImage onClick={modal.hide} style={{ maxWidth, maxHeight }} source={source} />).setBackdropClick(modal.hide))
	return <LazyLoadImage {...preview && longPressEvent} wrapperClassName={className} alt="" component-id="image" effect="blur" {...rest} src={source} />
}

export const PureImage = ({ className = "", source, ...rest }: PureImageProps) => {
	// tadinya punya class flex
	return <img {...rest} alt="" component-id="image" className={`${className}`} src={source} />
}

export default Image