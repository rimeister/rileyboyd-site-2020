import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

import {tween} from '../assets/js/parts/_utility';

const MobileNav = (props) => {

    let showNavbarStyles = {
        display: 'block',
        opacity: 1,
        transform: 'translate3d(0px, 0px, 0px)'
    }

    useEffect(()=>{
        console.log(props.isOpened);
    },[props.isOpened]);

    const closeBtnHandler = (event) => {
        event.preventDefault();
        if (props.closeBtnHandler) {
            props.closeBtnHandler();
        } 
    }

    // Need to use the prop "isOpened" to show/hide
    const navBarFullScreen = () => {

    // Reference: initNavBarFullScreen.js
    
        /*
        const self = this;
        const $navbar = $('.rb-navbar-full');
        const $navbarSocial = $navbar.find('.rb-nav-social');
        let isOpened;

        self.fullscreenNavbarIsOpened = () => isOpened;

        self.toggleFullscreenNavbar = () => {
            self[isOpened ? 'closeFullscreenNavbar' : 'openFullscreenNavbar']();
        };
        self.openFullscreenNavbar = () => {
            if (isOpened || !$navbar.length) {
                return;
            }
            isOpened = 1;

            let $navbarMenuItems = $navbar.find('.rb-nav .rb-drop-item.open > .dropdown:not(.closed) > li > a');
            if (!$navbarMenuItems.length) {
                $navbarMenuItems = $navbar.find('.rb-nav > li > a');
            }

            // active all togglers
            $('.rb-navbar-full-toggle').addClass('active');

            // set top position and animate
            tween.set($navbarMenuItems, {
                opacity: 0,
                force3D: true,
            });
            tween.set($navbarSocial, {
                opacity: 0,
                force3D: true,
            });
            tween.to($navbar, 0.5, {
                opacity: 1,
                force3D: true,
                display: 'block',
                onComplete() {
                    self.initPluginNano($navbar);
                },
            });
            tween.staggerTo($navbarMenuItems, 0.3, {
                y: 0,
                opacity: 1,
                delay: 0.2,
            }, 0.05);
            tween.to($navbarSocial, 0.3, {
                y: 0,
                opacity: 1,
                delay: 0.4,
            });

            $navbar.addClass('open');

            // prevent body scrolling
            self.bodyOverflow(1);

            // trigger event
            $wnd.trigger('rb-open-full-navbar', [$navbar]);
        };

        self.closeFullscreenNavbar = (dontTouchBody) => {
            if (!isOpened || !$navbar.length) {
                return;
            }
            isOpened = 0;

            // disactive all togglers
            $('.rb-navbar-full-toggle').removeClass('active');

            // set top position and animate
            tween.to($navbar, 0.5, {
                opacity: 0,
                force3D: true,
                display: 'none',
                onComplete() {
                    if (!dontTouchBody) {
                        // restore body scrolling
                        self.bodyOverflow(0);
                    }
                },
            });

            // open navbar block
            $navbar.removeClass('open');

            // trigger event
            $wnd.trigger('rb-close-full-navbar', [$navbar]);
        };

        $doc.on('click', '.rb-navbar-full-toggle', (e) => {
            self.toggleFullscreenNavbar();
            e.preventDefault();
        });

        $wnd.on('rb-open-search-block', () => {
            self.closeFullscreenNavbar(1);
        });
        $wnd.on('rb-open-share-place', self.closeFullscreenNavbar);
        */

    }

    return(
        <nav className="rb-navbar rb-navbar-full rb-navbar-align-center" id="rb-nav-mobile" style={props.isOpened ? showNavbarStyles : {}}>
            <div className="rb-navbar-bg">
                <div className="bg-image" style={{backgroundImage: "url('assets/images/bg-menu.jpg')"}}></div>
            </div>
            <div className="rb-nav-table">
                <div className="rb-nav-row">
                    <div className="container">
                        <div className="rb-nav-header">
                            <div className="rb-nav-logo">
                                <Link to="/" className="rb-nav-logo">
                                    <img src="assets/images/logo-light.svg" alt="" width="85" />
                                </Link>
                            </div>
                            <div className="rb-nav-close rb-navbar-full-toggle" onClick={closeBtnHandler}>
                                <span className="rb-icon-close"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rb-nav-row-full rb-nav-row">
                    <div className="nano">
                        <div className="nano-content">
                            <div className="rb-nav-table">
                                <div className="rb-nav-row rb-nav-row-full rb-nav-row-center rb-navbar-mobile-content">
                                    <ul className="rb-nav">
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rb-nav-row">
                    <div className="container">
                        <div className="rb-nav-social">
                            <ul>
                                <li><a href="https://twitter.com/riley_boyd"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.facebook.com/rileyboydstudios/"><i className="fa fa-facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>  
    );

}

MobileNav.defaultProps = {
    closeBtnHandler: null
}

export default MobileNav;