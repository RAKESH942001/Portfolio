import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { peek } from '@laufire/utils/debug';

const MenuIcons = (context) => {
	const { setState, state, state: { drawerOpen }} = context;

	peek(drawerOpen);
	return <div className="menuIcon">
		<div onClick={ () => setState({
			...state,
			drawerOpen: !drawerOpen,
		}) }
		><MenuIcon/></div>
	</div>;
};

export default MenuIcons;
