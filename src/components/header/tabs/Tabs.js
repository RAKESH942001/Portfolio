import React from 'react';
import CloseIcons from './CloseIcons';

const Tabs = (context) => {
	const { state: { drawerOpen }} = context;

	return (
		<div
			className={ drawerOpen ? 'drawerTab' : 'tabs' }
		>
			<div className="tab">	<a href="#">Home</a> </div>
			<div className="tab"><a href="#">About</a></div>
			<div className="tab"><a href="#">Portfolio</a></div>
			<div className="tab"><a href="#">Contact</a></div>
			<CloseIcons { ...context }/>
		</div>
	);
}
	;

export default Tabs;
