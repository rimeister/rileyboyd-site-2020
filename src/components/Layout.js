import React, {useState} from 'react';

import Header from './Header';
import Nav from './Nav';
import MobileNav from './MobileNav';
import Footer from './Footer';

const Layout = (props) => {

	let [fullscreenMenuIsOpened, setFullscreenMenuIsOpened] = useState(false);

	const menuIconClickHandler = () => {

		if (fullscreenMenuIsOpened) {
			setFullscreenMenuIsOpened(false);
		} else {
			setFullscreenMenuIsOpened(true);
		}
	}

	return(
	<>
	<Header menuIconClickHandler={menuIconClickHandler} />
    <div className="wrapper">
		<Header menuIconClickHandler={menuIconClickHandler} />
		<div className="rb-main">
			{props.children}
		</div>
		<Footer />
	</div>	
	<MobileNav isOpened={fullscreenMenuIsOpened} />
	</>
	)
};

export default Layout;