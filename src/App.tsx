import { useEffect, useState, useMemo } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AdminContext } from './contexts/AdminContext';

function App() {
	const [loading, setLoading] = useState(true);
	const [admin, setAdmin] = useState<boolean>(false);
	const adminProviderValue = useMemo(
		() => ({ admin, setAdmin }),
		[admin, setAdmin]
	);

	useEffect(() => {
		if (!loading) return;

		setLoading(false);
	}, []);

	return (
		<>
			{/* <AdminContext> */}
			<header>
				<Navbar />
			</header>
			<main>
				<Outlet></Outlet>
			</main>
			<footer></footer>
			{/* </AdminContext> */}
		</>
	);
}

export default App;
