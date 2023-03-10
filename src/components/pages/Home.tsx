import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
			<p>Home</p>
			<Link to='/booking'>Go to booking</Link>
		</>
	);
};
