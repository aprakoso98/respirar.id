import React, { HTMLAttributes } from 'react';

interface IconProps extends HTMLAttributes<HTMLLIElement> {
	name: string
	solid?: boolean
	regular?: boolean
}

const Icon = ({ regular, solid, className = "", name, ...rest }: IconProps) => {
	return <i {...rest} className={`${regular ? 'far' : solid ? 'fas' : 'fa'} fa-${name} ${className}`} />
}

export default Icon