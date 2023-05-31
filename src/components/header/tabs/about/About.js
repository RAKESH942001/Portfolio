import React from 'react';
import AboutImg from './AboutImg';
import AboutContent from './AboutContent';

const About = (context) =>
	<div className="about">
		<AboutImg { ...context }/>
		<AboutContent { ...context }/>
	</div>;

export default About;
