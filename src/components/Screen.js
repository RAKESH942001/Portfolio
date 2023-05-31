import React from 'react';
import NameAndDetails from './NameAndDetails';
import Header from './header/Header';
import About from './header/tabs/about/About';
const Screen = (context) =>
	<div>
		<Header { ...context }/>
		<NameAndDetails { ...context }/>
		<About { ...context }/>
	</div>;

export default Screen;
