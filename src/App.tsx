import { useEffect, useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { initBiz } from './services/restaurantService';

function App() {
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (!loading) return;
		initBiz(); // Initalize company database
		setLoading(false);
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
