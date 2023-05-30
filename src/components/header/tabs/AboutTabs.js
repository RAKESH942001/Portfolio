import React from 'react';

const AboutTabs = (context) => {
	const { state, setState, state: { tabSkill }} = context;

	return <div className="aboutTabs">
		<p
			className="tabLinks activeLink"
			onClick={ () => setState({ ...state,
				tabSkill: !tabSkill }) }
		>Skills</p>
		<p className="tabLinks">Education</p>

	</div>
	;
};

export default AboutTabs;
