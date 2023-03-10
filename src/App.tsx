import { useEffect, useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { initBiz } from './services/restaurantService';

function App() {
	useEffect(() => {
		initBiz(); // Initalize company database
	});

	return (
		<>
			<header></header>
			<main>
				<Outlet></Outlet>
			</main>
			<footer></footer>
		</>
	);
}

export default App;
