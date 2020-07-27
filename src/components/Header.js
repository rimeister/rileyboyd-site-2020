import React from 'react';
import Nav from './Nav';

const Header = () => {

	return (
	    <header className="rb-header">
	        <Nav sticky={true} />
	    </header>
	);
}

export default Header;