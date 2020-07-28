import React, {useEffect,useRef} from 'react';
import { useHistory } from 'react-router-dom';
// import aboutMeSignatureImg from '../assets/images/about-me-signature.png';

import TweenMax from 'gsap';

import TimelineMax from 'gsap/TimelineMax';

import Button from '../components/Button';

import ContactForm from '../components/ContactForm';

const HomeView = () => {

    let timeline = new TimelineMax({repeat:0});

    const breakpointCheckRef = useRef();

    const aboutRef = useRef();

    /*
        
        Text animation:

        Animate in text, then animate in button

        How hard would it be to then animate in my "about section"

        and portfolio items?

    */

    const getBreakpoint = (checkerEle) => {

        let breakpoint = 'xs';

        let breakpointOpacity = window.getComputedStyle(checkerEle).getPropertyValue("opacity");

        if (breakpointOpacity >= 0.6) {
            breakpoint = 'sm';
        }
        
        if (breakpointOpacity >= 0.8) {
            breakpoint = 'md';
        }

        if (breakpointOpacity >= 0.8) {
            breakpoint = 'lg';
        }

        return breakpoint;

    }

    const scrollToRef = (ref) => {

        window.scrollTo({
            top: ref.current.offsetTop - (getBreakpoint(breakpointCheckRef.current)=='lg'? 101 : 98),
            behavior: 'smooth'
        });

    }

    // 0,ref.current.offsetTop);

    const history = useHistory();

    const btnHandler = () => {
        history.push('/portfolio');
    }

    const scrollDownHandler = (event) => {
        event.preventDefault();
        scrollToRef(aboutRef);
    }

    useEffect(()=>{

        window.scrollTo(0, 0);
    
        timeline
            .to('#hero-text-1', 1, {top: 0, opacity: 1},0.5)
            .to('#hero-text-2', 1, {top: 0, opacity: 1},1.75)
            .to('.hero-btn', 0.15, {top: 0, opacity: 1},3)
        ;
    
    },[]);
    
    return (

        <div className="page-home">
           <div className="rb-header-title rb-header-title-full rb-header-title-parallax-opacity">
                <div className="wave" />
                <div className="wave" />
                <div className="rb-header-table">
                    <div className="rb-header-table-cell">
                        <div className="container">
                            <h1 className="rb-title display-3"><span id="hero-text-1" className="hero-text-line">Hello, I'm <span className="hero-text-name">Riley&nbsp;Boyd</span>.</span><span id="hero-text-2" className="hero-text-line">I'm a web designer and&nbsp;developer.</span></h1>
                            <Button text="View My Work" onClick={btnHandler} className="mt-15 hero-btn" />
                            <div className="rb-gap"></div>
                            <div className="rb-header-text text-white">
                                <div className="rb-gap-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                   <a onClick={scrollDownHandler} className="rb-header-title-scroll-down text-white" href="#rb-header-title-scroll-down"><span className="pe-7s-angle-down"></span></a>
                </div>
            </div>
            <div id="rb-header-title-scroll-down"></div>
            <div className="bg-white" id="about" ref={aboutRef}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                             <div className="rb-gap-4 mt-9"></div>
                             <h2 className="display-4">About Me</h2>
                             <div className="rb-gap mnt-5"></div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 text-left">
                             {/*<img src={} /> */}
                               <p>I'm a front-end web specilist with nine years of professional experience.</p>
                               <p>Lorem Ipsum</p>
                        </div>
                        <div className="col-lg-6 text-left">
                               <p>I'm a front-end web specilist with nine years of professional experience.</p>
                               <p>Lorem Ipsum</p>
                        </div>
                        <div className="col-lg-12">
                             <div className="rb-gap-4 mt-25"></div>
                        </div>
                    </div>
                </div>
            </div>
                
            <ContactForm />

            <div className="breakpoint-check" ref={breakpointCheckRef} />
        </div>

    );
}

export default HomeView;