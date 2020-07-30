import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../components/Button';


// import aboutMeSignatureImg from '../assets/images/about-me-signature.png';

const NoMatch404View = () => {

    const history = useHistory();

    const btnHandler = () => {
        history.push('/');
    }

    useEffect(()=>{
      window.scrollTo(0, 0);
    },[]);
    
    return (

      <div>
        <div className="container">

           <h1 className="text-center mt-100">Oops! We couldn't find the page you were looking for.</h1>
           <div className="text-center">
           <Button text="Return Home" onClick={btnHandler} className="mt-15 hero-btn" />
           </div>

        </div>
        <div className="rb-gap-4"></div>

        </div>

    );
}

export default NoMatch404View;