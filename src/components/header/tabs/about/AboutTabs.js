/* eslint-disable max-lines-per-function */
import React from 'react';
import TabPanels from './TabPanels';
import { Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const AboutTabs = (context) => {
	const { config: { tabLabel }, setState, state: { tab }} = context;

	return (
		<TabContext value={ tab }>
			<div>
				<TabList
					onChange={ (event, value) => setState((state) => ({
						...state,
						tab: value,
					})) }
				>
					{tabLabel.map((data, key) =>
						<Tab
							key={ key }
							sx={ {
								color: 'white',
							} }
							label={ data }
							value={ data }
						/>)}
				</TabList>
			</div>
			<div>
				{tabLabel.map((data, key) => {
					const Components = TabPanels[data];

					return (
						<TabPanel
							key={ key }
							value={ data }
						>
							<Components { ...context }/>
						</TabPanel>);
				})}
			</div>
		</TabContext>);
};
// }

// return <div className="aboutTabs">
// 	<div>
// 		<p
// 			onClick={ () => setState({ ...state, tabSkill: !tabSkill,
// 				tabEducation: false }) }
// 		>Skills</p>
// 		<Skills { ...context }/>
// 	</div>
// 	<div>
// 		<p
// 			onClick={ () => setState({ ...state,
// 				tabEducation: !tabEducation, tabSkill: false }) }
// 		>Education</p>
// 		<Educations { ...context }/>
// 	</div>
// </div>;

export default AboutTabs;
