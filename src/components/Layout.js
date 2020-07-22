import React from 'react';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => (
	<>
	<Header />
    <div className="wrapper">
		<Header />
		<Nav />		
		<div className="nk-main">
			{props.children}
		</div>
		<Footer />
	</div>	
	</>
);

export default Layout;