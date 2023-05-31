import React from 'react';
import Skills from './Skills';
import Educations from './Education';

const AboutTabs = (context) => {
	const { state, setState, state: { tabSkill, tabEducation }} = context;

	return <div className="aboutTabs">
		<div>
			<p
				className="tabLinks activeLink"
				onClick={ () => setState({ ...state, tabSkill: !tabSkill }) }
			>Skills</p>
			<Skills { ...context }/>
		</div>
		<div>
			<p
				className="tabLinks activeLink "
				onClick={ () => setState({ ...state,
					tabEducation: !tabEducation }) }
			>Education</p>
			<Educations { ...context }/>
		</div>
	</div>;
};

export default AboutTabs;
