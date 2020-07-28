import React, {useState,useRef} from 'react';

import axios from 'axios';

const ContactForm = () => {

	const nameInputRef = useRef();
	const emailInputRef = useRef();
	const titleInputRef = useRef();
	const messageInputRef = useRef();

	const [nameError,setNameError] = useState(false);
	const [emailError,setEmailError] = useState(false);
	const [msgError,setMsgError] = useState(false);

/*
	axios.get('http://qa.rileyboyd.com/contact.php')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
*/
	
	const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


	const validateForm = () => {
		
		let hasError = false;

		// Name
		
		if (nameInputRef.current.value.length === 0) {
			setNameError(true);
			hasError = true;
		}

		console.log(emailInputRef.current.value);

		// Email
		if (emailInputRef.current.value.length === 0 && emailRegExp.test(emailInputRef.current.value)) {
			setEmailError(true);
			hasError = true;
		}

		// Message
		if (messageInputRef.current.value.length === 0) {
			setMsgError(true);
			hasError = true;
		}

		if (hasError) {
			return false;
		} else {
			return true;
		}

	}

	const onChangeHandlerName = (event) => {
		event.preventDefault();
		setNameError(false);

	}

	const onChangeHandlerEmail= (event) => {
		event.preventDefault();
		setEmailError(false);

	}


	const onChangeHandlerMsg = (event) => {
		event.preventDefault();
		setMsgError(false);

	}

	const contactFormSubmitHandler = (event) => {
		event.preventDefault();
		console.log('submission valid: '+validateForm());
	} 

	return(
      <div className="container" id="contact">
        <div className="rb-gap-5" />
        <div className="row vertical-gap">
          <div className="col-lg-5">
            <h2 className="display-4">Contact Me</h2>
            <div className="rb-gap mnt-3" />
            <p>Get in touch! Use this form to send me an email.</p>
            {/*
            <ul className="rb-contact-info">
              <li><strong>Address:</strong> 10111 Santa Monica Boulevard, LA</li>
              <li><strong>Phone:</strong> +44 987 065 908</li>
              <li><strong>Email:</strong> info@Example.com</li>
              <li><strong>Fax:</strong> +44 987 065 909</li>
            </ul>
           */}
          </div>
          <div className="col-lg-7">
            {/* START: Form */}
            <form className="rb-form rb-form-ajax" onSubmit={contactFormSubmitHandler}>
              <div className="row vertical-gap">
                <div className="col-md-6">
                  <input type="text" className={`form-control required ${nameError ? 'rb-error': ''}`} name="name" placeholder="Your Name" ref={nameInputRef} onChange={onChangeHandlerName} />
                  <div id="name-error" class="rb-error" style={{ display: nameError ? 'block': 'none'}}>This field is required.</div>
                </div>
                <div className="col-md-6">
                  <input type="email" className={`form-control required ${emailError ? 'rb-error': ''}`} name="email" placeholder="Your Email" ref={emailInputRef} onChange={onChangeHandlerEmail} />
                  <div id="email-error" class="rb-error" style={{ display: emailError ? 'block': 'none'}}>Please enter a valid email address.</div>
                </div>
              </div>
              <input type="hidden" className="form-control required" name="title" placeholder="Your Title" value="title" />
              <div className="rb-gap-1" />
              <textarea className={`form-control required ${msgError ? 'rb-error': ''}`} name="message" rows={8} placeholder="Your Comment" aria-required="true" defaultValue={""} ref={messageInputRef} onChange={onChangeHandlerMsg} />
              <div id="name-error" class="rb-error" style={{ display: msgError ? 'block': 'none'}}>This field is required.</div>
              <div className="rb-gap-1" />
              <div className="rb-form-response-success">Nerror</div>
              <div className="rb-form-response-error">Error</div>
              <button className="rb-btn">Send Message</button>
            </form>
          </div>
        </div>
        <div className="rb-gap-5" />
      </div>
	);

}

export default ContactForm;