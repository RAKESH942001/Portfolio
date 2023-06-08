import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';

import React from 'react';

const ContactLeft = () =>
	<div className="contactLeft">
		<p><EmailIcon/>nlrakesh44@gmail.com</p>
		<p><PhoneInTalkRoundedIcon/>+91 8838190978</p>
		<div className="socialIcon">
			<a href="#"><FacebookRoundedIcon/></a>
			<a href="#"><InstagramIcon/></a>
			<a href="#"><LinkedInIcon/></a>
			<a href="#"><GitHubIcon/></a>
		</div>
		<a
			href="/resume.pdf"
			download={ true }
			className="btn btn2"
		>Download CV</a>
	</div>;

export default ContactLeft;
