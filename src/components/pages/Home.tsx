import { Link } from 'react-router-dom';
import { initBiz } from '../../services/restaurantService';
import { useState, useEffect } from 'react';

export const Home = () => {
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (!loading) return;
		initBiz();
		setLoading(false);
	}, []); // Company initialized

	return (
		// TEST CODE
		<>
			<p>Home</p>
			<Link to='/booking'>Go to booking</Link>
		</>
	);
};
