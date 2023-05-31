import React from 'react';

const Skills = (context) => {
	const { state: { tabSkill }} = context;
	const flag = tabSkill ? 'inline-block' : 'none';

	return (
		<div
			className="tabContents "
			style={ {
				display: flag,
			} }
		>
			<span className="listHeader">React Developer</span>
			<div>Designs and creates Js based
				applications for web</div><br/>
			<span className="listHeader">Front-End Developer</span>
			<div>Creates websites and applications using web</div>
		</div>
	);
};

export default Skills;
