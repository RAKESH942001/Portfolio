import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Tabs = (context) => {
	const { state: { drawerOpen }} = context;

	return (
		<div
			className={ drawerOpen ? 'drawerTab' : 'tabs' }
		>
			<div className="tab">	<a href="#">Home</a> </div>
			<div className="tab"><a href="#">About</a></div>
			<div className="tab"><a href="#">Services</a></div>
			<div className="tab"><a href="#">Portfolio</a></div>
			<div className="tab"><a href="#">Contact</a></div>
			<div className="closeIcon"><CloseIcon/></div>
		</div>
	);
}
	;

export default Tabs;
