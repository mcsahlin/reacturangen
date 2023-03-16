import axios, { AxiosResponse } from 'axios';
import { IBooking } from '../models/IBooking';
import { IRestaurant } from '../models/IRestaurant';

//**** KEYS ****//
const BASE_URL: string = 'https://school-restaurant-api.azurewebsites.net/';
export const bizKey: string = '64121c14072ea76784085cba';
let bookingId: string = ''; //! Placeholder - value should be assigned by function
let customerId: string = ''; //! Placeholder - value should be assigned by function

//**** GET ****//
export const GET_RESTAURANT_URL: string = `${BASE_URL}restaurant/${bizKey}`;
const GET_BOOKINGS_URL: string = `${BASE_URL}booking/restaurant/${bizKey}`;
const GET_BOOKING_URL: string = `${BASE_URL}booking/${bookingId}`; //! Not static! (bookingId)
const GET_CUSTOMER_URL: string = `${BASE_URL}booking/${customerId}`; //! Not static! (customerId)

//**** POST ****//
export const CREATE_RESTAURANT_URL: string = `${BASE_URL}restaurant/create`;
const createCustomer: string = `${BASE_URL}customer/create`;
const createBooking: string = `${BASE_URL}booking/create`;

//**** PUT ****//**** ADMIN ****//
const updateBooking: string = `${BASE_URL}booking/update${bookingId}`; //! Not static! (bookingId)
const updateCustomer: string = `${BASE_URL}customer/update${customerId}`; //! Not static! (customerId)

//**** DELETE ****//**** ADMIN ****//
const deleteBooking: string = `${BASE_URL}booking/delete${bookingId}`; //! Not static! (bookingId)

//---------------------------------------------------------------------------//

//* Base call
const apiCall = async <T>(url: string) => {
	let response = await axios.get<T>(url);
	return response;
};

//TODO# Test
//#region getBooking
export const getBooking = async (): Promise<IBooking> => {
	const response: IBooking | any = await apiCall<IBooking>(GET_BOOKING_URL).then(
		(res) => {
			return res.data as IBooking;
		}
	);
	// .then((data) => {
	// 	// booking.id = data.id;
	// 	// booking.customerId = data.customerId;
	// 	// booking.date = data.date;
	// 	// booking.numberOfGuests = data.numberOfGuests;
	// 	// booking.restaurantId = data.restaurantId;
	// 	// booking.time = data.time;
	// })
	return response;
};
//#endregion getBooking

//#region getBookings

export const getBookings = async (): Promise<AxiosResponse<IBooking[]>> => {
	const response: IBooking[] | any = await apiCall<IBooking[]>(
		GET_BOOKINGS_URL
	).then((res) => {
		return res.data as IBooking[];
	});
	return response;
};
//#endregion getBookings

//#region getCustomers
interface ICustomer {
	id: string;
	name: string;
	lastname: string;
	email: string;
	phone: string;
}
export const getCustomer = async (): Promise<AxiosResponse<ICustomer>> => {
	const response: IBooking | any = await apiCall<ICustomer>(
		GET_CUSTOMER_URL
	).then((res) => {
		return res.data as ICustomer;
	});
	return response;
};
//#endregion getCustomer

//#region getRestaurant
export const getRestaurant = async (): Promise<AxiosResponse<IRestaurant>> => {
	// let response = await axios.get<AxiosResponse<IRestaurant>>(GET_RESTAURANT_URL);
	// return response.data;
	const response = await apiCall<AxiosResponse<IRestaurant>>(GET_RESTAURANT_URL);
	return response.data;
};
//#endregion getRestaurant

export const dbCheck = async () => {
	const res = await apiCall<AxiosResponse<string>>(GET_RESTAURANT_URL);
	return res.data;
};

export const initBiz = () => {
	const res = axios
		.post(CREATE_RESTAURANT_URL, {
			name: 'Reacturangen',
			address: {
				street: 'Reactsvängen 101',
				zip: '101 23',
				city: 'Stockholm',
			},
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
		});
	res.then((key) => {
		return key;
	});
};
