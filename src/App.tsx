import { useEffect, useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { bizKey, initBiz } from './services/restaurantService';
import { Navbar } from './components/Navbar';

function App() {
	useEffect(() => {
		initBiz(); // Initalize company database
	});
	console.log(bizKey);

	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<Outlet></Outlet>
			</main>
			<footer></footer>
		</>
	);
}

export default App;
