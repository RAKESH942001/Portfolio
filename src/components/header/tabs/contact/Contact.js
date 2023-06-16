import React from 'react';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';

const Contact = (context) =>
	<div id="contact" className="contact">
		<h1 className="subTitle">Contact</h1>
		<div className="contactDetails">
			<ContactLeft { ...context }/>
			<ContactRight { ...context }/>
		</div>
	</div>;

export default Contact;
