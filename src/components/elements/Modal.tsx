import React from 'react';
import View from './View';

interface ModalProps {
	visible: boolean
}

const Modal = ({ visible }: ModalProps): JSX.Element => {
	return <>
		{visible && <View className={`absolute w-full bg-dark`} >hsdfghsgdf</View>}
	</>
}

export default Modal