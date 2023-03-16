import { GuestCountRadio } from './styled/GuestCountRadio';
import { GuestCountWrapper } from './styled/Wrappers';
import { useState, useContext, useEffect } from 'react';
import { BookingContext } from '../contexts/BookingContext';

export const GuestCountSelector = () => {
	const [guestCount, setGuestCount] = useState<number>(NaN);
	const bookingContext = useContext(BookingContext);

	useEffect(() => {
		bookingContext.setNumberOfGuests(guestCount);
	}, [guestCount]);

	return (
		<GuestCountWrapper>
			<GuestCountRadio
				value={1}
				onClick={() => {
					setGuestCount(1);
				}}
			></GuestCountRadio>
			<GuestCountRadio
				value={2}
				onClick={() => {
					setGuestCount(2);
				}}
			></GuestCountRadio>
			<GuestCountRadio
				value={3}
				onClick={() => {
					setGuestCount(3);
				}}
			></GuestCountRadio>
			<GuestCountRadio
				value={4}
				onClick={() => {
					setGuestCount(4);
				}}
			></GuestCountRadio>
			<GuestCountRadio
				value={5}
				onClick={() => {
					setGuestCount(5);
				}}
			></GuestCountRadio>
			<GuestCountRadio
				value={6}
				onClick={() => {
					setGuestCount(6);
				}}
			></GuestCountRadio>
		</GuestCountWrapper>
	);
};
