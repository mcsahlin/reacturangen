import {
	BookingHeading,
	BookingContainer,
} from './../components/styled/BookingPage.style';
import { BookingContext } from '../contexts/BookingContext';
import { BookingCalendar } from '../components/BookingCalendar';
import { useState, useContext } from 'react';
import { ICustomer } from '../models/ICustomer';

export const Booking = () => {
	const [guestCount, setGuestCount] = useState<number>(NaN);
	const [date, setDate] = useState<string>();
	const [customer, setCustomer] = useState<ICustomer>();
	const bookingData = useContext(BookingContext);

	return (
		// TEST CODE
		<>
			<BookingContainer>
				<BookingHeading>Booking</BookingHeading>
				<BookingCalendar />
			</BookingContainer>
		</>
	);
};
