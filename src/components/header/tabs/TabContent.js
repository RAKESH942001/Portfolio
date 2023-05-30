import React from 'react';
import Educations from './Education';
import Skills from './Skills';

const TabContent = (context) =>
	<div>
		<Skills { ...context }/>
		<Educations { ...context }/>
	</div>;

export default TabContent;
