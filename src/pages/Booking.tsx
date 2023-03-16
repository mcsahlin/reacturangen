import { useContext, useState } from 'react';
import {
	BookingHeading,
	BookingContainer,
} from './../components/styled/BookingPage.style';
import { BookingCalendar } from '../components/BookingCalendar';
// import { GuestCountSelector } from '../components/GuestCountSelector';
import { GuestCountSelector } from '../components/GuestCountSelector';
import { BookingContext, NewBookingProvider } from '../contexts/BookingContext';
export const Booking = () => {
	const [guestCount, setGuestCount] = useState<number>(NaN);

	return (
		<>
			<BookingContainer>
				<BookingHeading>Booking</BookingHeading>
				<GuestCountSelector />
				<BookingCalendar />
			</BookingContainer>
		</>
	);
};
