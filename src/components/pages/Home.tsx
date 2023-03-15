import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HomeVideoBackground } from '../HomeVideoBackground';
import { HomeInfo } from '../HomeInfo';
import { HomeSecondBackground } from '../HomeSecondBackground';




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
