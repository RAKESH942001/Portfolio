import React from 'react';
import Logo from './Logo';
import Tabs from './Tabs';

const Header = (context) =>
	<div className="container">
		<Logo { ...context }/>
		<Tabs { ...context }/>
	</div>;

export default Header;
