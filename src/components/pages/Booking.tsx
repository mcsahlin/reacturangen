import { Link } from 'react-router-dom';
import { BookingCalendar } from '../BookingCalendar';

export const Booking = () => {
	return (
		// TEST CODE
		<>
			<p>Booking</p>
			<Link to='/contact'>Go to Contact</Link>
			<BookingCalendar />
		</>
	);
};
