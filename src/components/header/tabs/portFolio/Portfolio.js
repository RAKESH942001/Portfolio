import React from 'react';
import WorkList from './WorkList';

const Portfolio = (context) =>
	<div className="portfolio">
		<h1 className="subTitle">My Work</h1>
		<WorkList { ...context }/>
	</div>;

export default Portfolio;
