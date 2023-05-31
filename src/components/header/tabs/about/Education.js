import React from 'react';

const Educations = (context) => {
	const { state: { tabEducation }} = context;
	const flag = tabEducation ? 'inline-block' : 'none';

	return (
		<div
			className="tabContents"
			style={ {
				display: flag,
			} }
		>
			<span className="listHeader"> 2022-Current</span>
			<div>FrontEnd  Developer Training at Clear</div><br/>
			<span className="listHeader">2019-2022</span>
			<div>Bsc from Fighter Wings Aviation College</div>
		</div>
	);
};

export default Educations;
