import React from 'react';

const ContactRight = () =>
	<div className="contactRight">
		<form>
			<input
				type="text"
				name="Name"
				placeholder="Your Name"
				required={ true }
			/>
			<input
				type="text"
				name="email"
				placeholder="Your email"
				required={ true }
			/>
			<textarea name="message" rows={ 6 } placeholder="Your Message"/>
			<button type="submit" className="btn btn2">Submit</button>
		</form>
	</div>;

export default ContactRight;
