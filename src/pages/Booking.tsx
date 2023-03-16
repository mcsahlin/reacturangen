import { useContext, useState } from 'react';
import {
	BookingHeading,
	BookingContainer,
} from './../components/styled/BookingPage.style';
import { BookingCalendar } from '../components/BookingCalendar';
import { GuestCountSelector } from '../components/GuestCountSelector';
import { BookingContext, BookingProvider } from '../contexts/BookingContext';

export const Booking = () => {
	const [admin, setAdmin] = useState(false);
	const [guestCount, setGuestCount] = useState<number>(NaN);

	return (
		<>
			<BookingProvider>
				<BookingContainer>
					<BookingHeading>Booking</BookingHeading>
					<GuestCountSelector />
					<BookingCalendar />
				</BookingContainer>
			</BookingProvider>
		</>
	);
};
