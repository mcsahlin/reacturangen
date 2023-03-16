import {
	BookingHeading,
	BookingContainer,
} from './../components/styled/BookingPage.style';
import { BookingCalendar } from '../components/BookingCalendar';
import { GuestCountSelector } from '../components/GuestCountSelector';
export const Booking = () => {
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
