import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
/*
import {
    $, tween, $wnd, $doc,
} from '../assets/js/parts/_utility';
*/

const Nav = (props) => {

 const [isSticky, setSticky] = useState(false);
  const stickyRef = useRef(null)

    const handleScroll = () => {

        if (stickyRef.current) {
    
            window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
            ? setSticky(true)
            : setSticky(false);
        }
    };

    const navbarToggleHandler = (event) => {

        event.preventDefault();

        if (props.menuIconClickHandler) {
            props.menuIconClickHandler('test');
        }

    }


    /*
    // This function handle the scroll performance issue
    const debounce = (func, wait = 20, immediate = true) => {
      let timeOut;
      return () => {
       
        let context = this,
          args = arguments;
        const later = () => {
          timeOut = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeOut;
        clearTimeout(timeOut);
        timeOut = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };*/

    const debounce = (func,wait = 20, immediate = true) => {

        let timeout;

        return function() {
            let context = this;
            let args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                func.apply(context,args);
            },wait);
        }
    }
      
    useEffect(() => {
      window.addEventListener("scroll", debounce(handleScroll))
      return () => {
              window.removeEventListener("scroll", () => handleScroll);
            }  
    }, [debounce, handleScroll]);

    return(
    <nav ref={stickyRef} className={`rb-navbar rb-navbar-top ${props.sticky ? 'rb-navbar-autohide rb-navbar-transparent rb-navbar-white-text-on-top rb-onscroll-show' : ''} ${(props.sticky && isSticky) ? 'rb-navbar-solid rb-navbar-fixed' : ''}`}>
        <div className="container">
            <div className="rb-nav-table">
                <Link to="/" className="rb-nav-logo">
                    <img src="assets/images/logo-light.svg" alt="" width="85" className="rb-nav-logo-onscroll" />
                    <img src="assets/images/logo.svg" alt="" width="85" />
                </Link>
                <ul className="rb-nav rb-nav-right d-none d-lg-block" data-nav-mobile="#rb-nav-mobile">
                    <li className="active rb-drop-item">
                        <Link to="/"> Home </Link>
                        {/*
                        // Add this back in when WP sub-menus/child menus are set up
                        <ul className="dropdown">
                            <li>
                                <Link to="portfolio"> Home Default </Link>
                            </li>
                            <li>
                                <Link to="portfolio"> Minimal Portfolio </Link>
                            </li>
                            <li>
                                <Link to="portfolio"> Slider Home </Link>
                            </li>
                            <li>
                                <Link to="portfolio"> Video Home </Link>
                            </li>
                            <li>
                                <Link to="portfolio"> Freelancer Portfolio </Link>
                            </li>
                            <li>
                                <Link to="portfolio"> Minimal Agency </Link>
                            </li>
                            <li className="active">
                                <Link to="portfolio"> One Page Agency </Link>
                            </li>
                            <li>
                                <Link to="portfolio"> Digital Agency </Link>
                            </li>
                            <li>
                                Link to="portfolio"> Fullscreen Slider </Link>
                            </li>
                        </ul>
                        */}
                    </li>
                    <li>
                        <Link to="/portfolio"> Portfolio </Link>
                    </li>
                    {/*
                    <li>
                        <Link to="/cv"> CV </Link>
                    </li>
                    */}
                </ul>
                <ul className="rb-nav rb-nav-right rb-nav-icons">
                    <li className="single-icon d-lg-none">
                        <a href="#" className="rb-navbar-full-toggle" onClick={navbarToggleHandler}>
                            <span className="rb-icon-burger">
                                <span className="rb-t-1"></span>
                                <span className="rb-t-2"></span>
                                <span className="rb-t-3"></span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );

}

Nav.defaultProps = {
    menuIconClickHandler: null
}

export default Nav;