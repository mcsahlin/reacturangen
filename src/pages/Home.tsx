import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { HomeVideoBackground } from '../components/HomeVideoBackground';
import { HomeInfo } from '../components/HomeInfo';
import { HomeSecondBackground } from '../components/HomeSecondBackground';
<<<<<<< HEAD
import { Footer } from '../components/Footer';

=======
import { AdminContext } from '../contexts/AdminContext';
>>>>>>> dev

export const Home = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [admin, setAdmin] = useState(false);
	const adminContext = useContext(AdminContext);

	useEffect(() => {
		if (!loading) return;
		// inits
		setLoading(false);
	}, []);

	return (
		// TEST CODE
		<>
<<<<<<< HEAD
			<HomeVideoBackground/>
			<HomeInfo/>
			<HomeSecondBackground/>
			<Footer/>
=======
			<HomeVideoBackground />
			<HomeInfo />
			<HomeSecondBackground />
>>>>>>> dev
		</>
	);
};
