import React from 'react';
import Logo from './Logo';
import Tabs from './tabs/Tabs';
import MenuIcons from './MenuIcon';

const Header = (context) =>
	<div className="header ">
		<Logo { ...context }/>
		<Tabs { ...context }/>
		<MenuIcons { ...context }/>
	</div>;

export default Header;
