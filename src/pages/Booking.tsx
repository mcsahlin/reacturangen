import { useContext, useState } from 'react';
import {
	BookingHeading,
	BookingContainer,
} from './../components/styled/BookingPage.style';
import { BookingCalendar } from '../components/Calendar/BookingCalendar';
import { BookingContext, BookingProvider } from '../contexts/BookingContext';

import { RegistrationForm } from '../components/ContactForm/CustomerRegistrationForm';
import { HomeSecondBackground } from '../components/HomeSecondBackground';
import { ICustomer } from '../models/ICustomer';
import { IBooking } from '../models/IBooking';
import {
	apiCall,
	bizKey,
	customerId,
	GET_CUSTOMER_URL,
	CREATE_CUSTOMER_URL,
	GET_BOOKINGS_URL,
	GET_RESTAURANT_URL,
	reacturangId,
} from '../services/restaurantService';
import axios, { AxiosResponse } from 'axios';
export const Booking = () => {
	const [admin, setAdmin] = useState(false);
	const [guestCount, setGuestCount] = useState<number>(NaN);

	const times: string[] = [];
	times.push('18:00', '21:00');
	const date: string = '2023-03-17';
	const guests: number = 6;
	const customer: ICustomer = {
		name: 'lars',
		lastname: 'åke',
		email: 'lars@mail.com',
		phone: '070-1231231',
	};
	const booking: IBooking = {
		restaurantId: reacturangId,
		date: date,
		time: times[0],
		numberOfGuest: guests,
		customer: customer,
	};

	//#region check availability //* Klar
	//* funkis
	const check = async () => {
		let res = await apiCall(GET_BOOKINGS_URL);
		console.log(res.data);
	};
	check();
	//#endregion check availability working

	//#region Create customer //* Klar
	const createCustomer = async () => {
		let res = await axios
			.post(CREATE_CUSTOMER_URL, {
				name: 'lars',
				lastname: 'åke',
				email: 'lars@mail.com',
				phone: '070-1231231',
			})
			.then((res) => {
				return res.data;
			});
		console.log(res);
		return res;
	};
	const resCreateCustomer = createCustomer();
	console.log(resCreateCustomer);
	* customer id: 641379965ac3ee304c3401cc, 64137a735ac3ee304c3401dc, 64137a735ac3ee304c3401dd
	#endregion Create customer working

	//#region getAllBookings //* Klar
	const getAll = async (): Promise<AxiosResponse<IBooking[]>> => {
		const res = await axios.get<IBooking[]>(GET_BOOKINGS_URL);
		console.log(res);
		return res;

		.then(async (res) => {
				res.data.map((obj) => {
					let a =
						(obj.time, obj.restaurantId, obj.numberOfGuest, obj.date, obj.customer);
					return a;
				});
			});
	};
	console.log(getAll());
	//#endregion getAllBookings

	//#region GET CUSTOMER  //* Nästan
	const getCustomer = async () => {
		const res = await axios
			.get<ICustomer>(`${GET_CUSTOMER_URL}641379965ac3ee304c3401cc`)
			.then((res) => {
				return res.data;
			});
		console.log(res);
		return res;
	};
	let cust = getCustomer();
	cust.then((res) => {
		return res.name;
	});
	console.log(cust);
	//#endregion getCustomer

	return (
		<>
			<BookingProvider>
				<BookingContainer>
					<BookingHeading>Booking</BookingHeading>
					{/* <GuestCountSelector /> */}
					<BookingCalendar />
					<RegistrationForm />
				</BookingContainer>
				<HomeSecondBackground />
			</BookingProvider>
		</>
	);
};
