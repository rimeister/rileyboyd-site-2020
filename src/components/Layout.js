import React from 'react';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => {

	return(
	<>
	<Header />
    <div className="wrapper">
		<Header />
		<div className="rb-main">
			{props.children}
		</div>
		<Footer />
	</div>	
	</>
	)
};

export default Layout;