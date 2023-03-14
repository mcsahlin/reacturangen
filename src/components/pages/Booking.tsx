import { Link } from 'react-router-dom';
import { BookingCalendar } from '../BookingCalendar';
import { BookingHeading, BookingContainer } from '../../styles/BookingPage.style';
import { Navbar } from './Navbar';

export const Booking = () => {
	return (
		// TEST CODE
		<>
		<BookingContainer>
			<BookingHeading >Booking</BookingHeading>
			<BookingCalendar />
			<>
			<img src='' alt=''/>
			</>
		</BookingContainer>
		</>
	);
};
