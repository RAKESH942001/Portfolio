import React from 'react';
import NameAndDetails from './NameAndDetails';
import Header from './header/Header';
import About from './header/tabs/about/About';
import Portfolio from './header/tabs/portFolio/Portfolio';
const Screen = (context) =>
	<div>
		<Header { ...context }/>
		<NameAndDetails { ...context }/>
		<About { ...context }/>
		<Portfolio { ...context }/>
	</div>;

export default Screen;
