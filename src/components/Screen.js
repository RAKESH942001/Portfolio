import React from 'react';
import NameAndDetails from './NameAndDetails';
import About from './header/tabs/about/About';
import Portfolio from './header/tabs/portFolio/Portfolio';
import Contact from './header/tabs/contact/Contact';
import Header from './header/Header';
const Screen = (context) =>
	<div id="backgroundImage" className="container">
		<Header { ...context }/>
		<NameAndDetails { ...context }/>
		<About { ...context }/>
		<Portfolio { ...context }/>
		<Contact { ...context }/>
	</div>;

export default Screen;
