import { Box } from '@mui/material';
import React from 'react';

const Logo = ({ config: { logo }}) =>
	<Box>
		<img
			src={ logo }
			alt="images"
			width="150px"
		/>
	</Box>
	;

export default Logo;
