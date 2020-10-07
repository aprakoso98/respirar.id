import React, { HTMLAttributes } from 'react';

interface IconProps extends HTMLAttributes<HTMLLIElement> {
	name: string
	solid?: boolean
	regular?: boolean
	onClick?: () => void
}

const Icon = ({ onClick, regular, solid, className = "", name, ...rest }: IconProps) => {
	return <i {...rest} onClick={onClick} className={`icon ${regular ? 'far' : solid ? 'fas' : 'fa'} fa-${name} ${onClick ? 'pointer' : ''} ${className}`} />
}

export default Icon