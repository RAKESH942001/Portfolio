import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Tabs = () =>
	<div
		className="tabs"
	>
		<div>	<a href="#">Home</a> </div>
		<div><a href="#">About</a></div>
		<div><a href="#">Services</a></div>
		<div><a href="#">Portfolio</a></div>
		<div><a href="#">Contact</a></div>
		<div className="closeIcon"><CloseIcon/></div>
	</div>
	;

export default Tabs;
