/* eslint-disable react/jsx-first-prop-new-line */
import React from 'react';
import Skills from './Skills';
import Educations from './Education';

const AboutTabs = (context) => {
	const { state, setState, state: { tabSkill, tabEducation }} = context;

	return <div className="aboutTabs">
		<div>
			<p	className="tabLinks activeLink"
				onClick={ () => setState({ ...state, tabSkill: !tabSkill,
					tabEducation: false }) }
			>Skills</p>
			<Skills { ...context }/>
		</div>
		<div>
			<p	className="tabLinks activeLink "
				onClick={ () => setState({ ...state,
					tabEducation: !tabEducation, tabSkill: false }) }
			>Education</p>
			<Educations { ...context }/>
		</div>
	</div>;
};

export default AboutTabs;
