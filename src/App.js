import { React } from 'react';
import './App.scss';
import Screen from './components/Screen';

const App = (context) =>
	<div className="App">
		<Screen { ...context }/>
	</div>;

export default App;
