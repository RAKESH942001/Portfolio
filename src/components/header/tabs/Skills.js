import { Box } from '@mui/material';
import React from 'react';

const Skills = (context) => {
	const { state: { tabSkill }} = context;
	const flag = tabSkill ? 'block' : 'none';

	return (
		<Box
			className="tabContents"
			sx={ {
				display: flag,
			} }
		>
			<li><span>React Developer</span>
				<br/>Designs and creates Js based applications for web</li>
			<li><span>Front-End Developer</span>
				<br/>Creates websites and applications using web</li>
		</Box>
	);
};

export default Skills;
