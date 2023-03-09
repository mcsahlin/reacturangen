import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';
import { Contact } from './components/pages/Contact';
import { Booking } from './components/pages/Booking';

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
