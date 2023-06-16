import React from 'react';
import CloseIcons from './CloseIcons';

const Tabs = (context) => {
	const { state: { drawerOpen }} = context;

	return (
		<div
			className={ drawerOpen ? 'drawerTab' : 'tabs' }
		>
			<div className="tab">	<a href="#pageHeader">Home</a> </div>
			<div className="tab"><a href="#about">About</a></div>
			<div className="tab"><a href="#portfolio">Portfolio</a></div>
			<div className="tab"><a href="#contact">Contact</a></div>
			<CloseIcons { ...context }/>
		</div>
	);
}
	;

export default Tabs;
