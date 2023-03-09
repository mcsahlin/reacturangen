import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';
import { Contact } from './components/pages/Contact';
import { Booking } from './components/pages/Booking';
import { Admin } from './components/pages/Admin';

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
