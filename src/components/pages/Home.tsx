import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { StartBackground } from '../StartBackground';


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
			<StartBackground/>
		</>
	);
};
