import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const WorkList = ({ config: { workImg }}) =>
	<div className="workList">
		<img
			src={ workImg }
			alt="images"
			width="500px"
		/>
		<div className="layer">
			<h3>E-Commerce Website</h3>
			<p>These Project is based on Ecom-Website, and it contains cart,
				product and categories of products.It is a basic shopping web
				layout model,and it is user friendly for the customers to use
				and efficient checkout process.</p>
			<a href="#">
				<OpenInNewIcon/></a>
		</div>
	</div>;

export default WorkList;
