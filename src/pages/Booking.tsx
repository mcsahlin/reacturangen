import { useContext, useState } from 'react';
import {
	BookingHeading,
	BookingContainer,
} from './../components/styled/BookingPage.style';
import { BookingCalendar } from '../components/BookingCalendar';
import { BookingContext, BookingProvider } from '../contexts/BookingContext';

import { CustomerRegistrationForm } from '../components/CustomerRegistrationForm';
import { HomeSecondBackground } from '../components/HomeSecondBackground';
export const Booking = () => {
	const [admin, setAdmin] = useState(false);
	const [guestCount, setGuestCount] = useState<number>(NaN);

	return (
		<>
			<BookingProvider>
				<BookingContainer>
					<BookingHeading>Booking</BookingHeading>
					{/* <GuestCountSelector /> */}
					<BookingCalendar />
					<CustomerRegistrationForm children={undefined} />
				</BookingContainer>
				<HomeSecondBackground />
			</BookingProvider>
		</>
	);
};
