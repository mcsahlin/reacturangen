import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';
import { BookingCalendar } from './components/Calendar/BookingCalendar';

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
				element: <BookingCalendar />,
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
