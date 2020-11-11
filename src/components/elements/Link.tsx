import React, { AnchorHTMLAttributes } from 'react';
import { Link as DomLink, LinkProps } from "react-router-dom"

type Props = Omit<LinkProps, 'to'> & AnchorHTMLAttributes<{}> & {
	href?: string
	to?: LinkProps['to']
}

const Linkdd = ({ children, href, ...rest }: Props) => {
	return href?.validURL() ? <a {...rest} href={href} children={children} /> : <DomLink {...rest} to={href} children={children} />
}

export default Linkdd