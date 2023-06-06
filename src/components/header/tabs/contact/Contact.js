import React from 'react';
import ContactLeft from './ContactLeft';

const Contact = (context) =>
	<div className="contact">
		<ContactLeft { ...context }/>
	</div>;

export default Contact;
