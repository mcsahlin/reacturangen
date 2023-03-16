import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HomeVideoBackground } from '../components/HomeVideoBackground';
import { HomeInfo } from '../components/HomeInfo';
import { HomeSecondBackground } from '../components/HomeSecondBackground';


export const Home = () => {
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (!loading) return;
		// inits
		setLoading(false);
	}, []);

	return (
		// TEST CODE
		<>
			<HomeVideoBackground/>
			<HomeInfo/>
			<HomeSecondBackground/>
		</>
	);
};