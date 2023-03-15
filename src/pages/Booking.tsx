import {
	BookingHeading,
	BookingContainer,
} from './../components/styled/BookingPage.style';
import { BookingCalendar } from '../components/BookingCalendar';

export const Booking = () => {
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
