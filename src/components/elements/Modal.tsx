import React from 'react';
import View from './View';

interface ModalProps {
	visible: boolean
}

const Modal = ({ visible }: ModalProps): JSX.Element => {
	return <>
		{visible && <View className={`absolute w-full h-full bg-light`} items="center" justify="center">hsdfghsgdf</View>}
	</>
}

export default Modal