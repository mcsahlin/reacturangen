import { GuestCountRadio } from './styled/GuestCountRadio';
import { GuestCountWrapper } from './styled/Wrappers';
import { useState, useContext, useEffect } from 'react';
import { BookingContext } from '../contexts/BookingContext';

export const GuestCountSelector = () => {
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
		//* FOR API REQUEST TESTING
		<select id='guestCountSelection' placeholder='Select headcount son'>
			<option value='1'>1</option>
			<option value='2'>2</option>
			<option value='3'>3</option>
			<option value='4'>4</option>
			<option value='5'>5</option>
			<option value='6'>6</option>
		</select>
		// <GuestCountWrapper>
		// 	<GuestCountRadio
		// 		value={1}
		// 		onClick={() => {
		// 			setGuestCount(1);
		// 		}}
		// 	></GuestCountRadio>
		// 	<GuestCountRadio
		// 		value={2}
		// 		onClick={() => {
		// 			setGuestCount(2);
		// 		}}
		// 	></GuestCountRadio>
		// 	<GuestCountRadio
		// 		value={3}
		// 		onClick={() => {
		// 			setGuestCount(3);
		// 		}}
		// 	></GuestCountRadio>
		// 	<GuestCountRadio
		// 		value={4}
		// 		onClick={() => {
		// 			setGuestCount(4);
		// 		}}
		// 	></GuestCountRadio>
		// 	<GuestCountRadio
		// 		value={5}
		// 		onClick={() => {
		// 			setGuestCount(5);
		// 		}}
		// 	></GuestCountRadio>
		// 	<GuestCountRadio
		// 		value={6}
		// 		onClick={() => {
		// 			setGuestCount(6);
		// 		}}
		// 	></GuestCountRadio>
		// </GuestCountWrapper>
	);
};
