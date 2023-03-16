import { useEffect, useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import {
	dbCheck,
	getRestaurant,
	GET_RESTAURANT_URL,
	initBiz,
} from './services/restaurantService';
import { Navbar } from './components/Navbar';
import { RestaurantContext } from './contexts/RestaurantContext';
import axios from 'axios';
import { IRestaurant } from './models/IRestaurant';
function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!loading) return;

		setLoading(false);
	}, []);

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
