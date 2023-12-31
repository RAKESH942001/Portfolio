import React from 'react';
import AboutTabs from './AboutTabs';

const AboutContent = (context) =>
	<div className="aboutContent">
		<h1 className="subTitle">About Me</h1>
		<p>My name is Rakesh, and I enjoy promoting small companies to help them
			increase their profits.I am excited about the opportunity to be part
			of a team. I have a strong background in JavaScript,HTML5,CSS
			and React,Material Ui and would love to tell you about the strengths
			I could bring to this position.</p>
		<AboutTabs { ...context }/>
	</div>;

export default AboutContent;
