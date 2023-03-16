import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Contact } from './pages/Contact';
import { Booking } from './pages/Booking';
import { Admin } from './pages/Admin';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <Home />,
				index: true,
			},
			{
				path: '/booking',
				element: <Booking />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/admin',
				element: <Admin />,
			},
		],
	},
]);
