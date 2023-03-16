import { useEffect, useState, useMemo } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import {
	AdminContext,
	AdminProvider,
	IAdminContext,
} from './contexts/AdminContext';
import { login } from './utils/login';
import { Footer } from './components/Footer';

function App() {
	const [loading, setLoading] = useState(true);
	const [admin, setAdmin] = useState(false);
	const adminValue = useMemo(
		() => ({ value: admin, setValue: setAdmin }),
		[admin, setAdmin]
	);

	useEffect(() => {
		if (!loading) return;

		setLoading(false);
	}, []);

	return (
		<AdminContext.Provider value={adminValue}>
			<header>
				<Navbar />
			</header>
			<main>
				<Outlet></Outlet>
			</main>
			<footer>
				<Footer></Footer>
				{admin ? (
					<button
						type='button'
						onClick={async () => {
							const admin = await login();
							setAdmin(false);
						}}
					>
						Logout
					</button>
				) : (
					<button
						type='button'
						onClick={async () => {
							const admin = await login();
							setAdmin(true);
						}}
					>
						Admin Login
					</button>
				)}
			</footer>
		</AdminContext.Provider>
	);
}

export default App;
