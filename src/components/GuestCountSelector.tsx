import { GuestCountRadio } from './styled/GuestCountRadio';
import { GuestCountWrapper } from './styled/Wrappers';
import { useState, useContext, useEffect } from 'react';
import { BookingContext } from '../contexts/BookingContext';

export const GuestCountSelector_parked = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [guestCount, setGuestCount] = useState<number>();
	const bookingContext = useContext(BookingContext);

	useEffect(() => {
		if (!loading) return;
		const setListners = () => {
			let elemList = document.getElementsByName('guestCount');
			for (let i = 0; i < elemList.length; i++) {
				const element = elemList[i];
				element.addEventListener('click', () => {
					setGuestCount(+element.innerHTML);
				});
			}
		};
		setListners();
		setLoading(false);
	}, []);

	useEffect(() => {
		console.log(guestCount);
	}, [guestCount]);

	const handleChecked = (value: number) => {
		setGuestCount(value);
	};

	return (
		<GuestCountWrapper>
			{' '}
			//TODO: Needs styling
			<GuestCountRadio value={1} selected checked={handleChecked(1)} />
			1
			<GuestCountRadio value={2} checked={handleChecked(2)} />
			2
			<GuestCountRadio value={3} checked={handleChecked(3)} />
			3
			<GuestCountRadio value={4} checked={handleChecked(4)} />
			4
			<GuestCountRadio value={5} checked={handleChecked(5)} />
			5
			<GuestCountRadio value={6} checked={handleChecked(6)} />6
		</GuestCountWrapper>
	);
};
