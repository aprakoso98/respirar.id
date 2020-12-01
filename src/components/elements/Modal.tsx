import React from 'react';
import useWindowSize from 'src/hooks/useWindowSize';
import View from './View';

interface ModalProps {
	visible: boolean
	children?: JSX.Element
	onClick?: () => void
}

const Modal = ({ onClick, visible, children }: ModalProps): JSX.Element => {
	const id = 'modal-container'
	const [width, height] = useWindowSize()
	return <>
		{visible && <View
			id={id}
			// @ts-ignore
			onClick={e => e.target.id === id ? onClick() : e.preventDefault()}
			style={{ zIndex: 999, width, height }}
			className={`absolute bg-dark-tr`}
			items="center"
			justify="center">{children}</View>}
	</>
}

export default Modal