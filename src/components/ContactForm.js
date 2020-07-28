import React from 'react';

const ContactForm = () => {

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
            <form action="php/contact.php" className="rb-form rb-form-ajax">
              <div className="row vertical-gap">
                <div className="col-md-6">
                  <input type="text" className="form-control required" name="name" placeholder="Your Name" />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control required" name="email" placeholder="Your Email" />
                </div>
              </div>
              <div className="rb-gap-1" />
              <input type="text" className="form-control required" name="title" placeholder="Your Title" />
              <div className="rb-gap-1" />
              <textarea className="form-control required" name="message" rows={8} placeholder="Your Comment" aria-required="true" defaultValue={""} />
              <div className="rb-gap-1" />
              <div className="rb-form-response-success" />
              <div className="rb-form-response-error" />
              <button className="rb-btn">Send Message</button>
            </form>
          </div>
        </div>
        <div className="rb-gap-5" />
      </div>
	);

}

export default ContactForm;