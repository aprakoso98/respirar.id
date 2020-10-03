import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return <div className="flex flex-1 justify-between">
		<div>logo</div>
		<div className="flex">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/collections">Collections</Link>
		</div>
		<div>Search</div>
	</div>
}

export default Header