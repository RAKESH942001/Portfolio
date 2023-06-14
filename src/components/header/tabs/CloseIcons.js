import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const CloseIcons = (context) => {
	const { state, setState } = context;

	return (
		<div
			className="closeIcon"
			onClick={ () => setState({
				...state,
				drawerOpen: false,
			}) }
		><CloseIcon/></div>
	);
}
	;

export default CloseIcons;
