import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Contact } from './pages/Contact';
import { Booking } from './pages/Booking';

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
				path: '/Booking',
				element: <Booking />,
			},
			{
				path: '/Contact',
				element: <Contact />,
			},
		],
	},
]);
