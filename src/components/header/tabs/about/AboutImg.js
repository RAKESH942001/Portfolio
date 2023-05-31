import React from 'react';

const AboutImg = ({ config: { aboutImg }}) =>
	<div className="aboutImg">
		<img
			src={ aboutImg }
			alt="images"
		/>
	</div>;

export default AboutImg;
