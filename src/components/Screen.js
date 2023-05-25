import React from 'react';
import NameAndDetails from './NameAndDetails';
import Header from './Header';

const Screen = (context) =>
	<div>
		<Header { ...context }/>
		<NameAndDetails { ...context }/>

	</div>;

export default Screen;
