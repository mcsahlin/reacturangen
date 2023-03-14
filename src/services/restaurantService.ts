import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import { IBiz } from '../models/IBiz';

//**** KEYS ****//
export const BASE_URL: string =
	'https://school-restaurant-api.azurewebsites.net';
const [bizKey, setBizKey] = useState<string>();
const companyId: string = '640a7a746e84fa27b54e2635';
let bookingId: string = ''; //! Placeholder - value should be assigned by function
let customerId: string = ''; //! Placeholder - value should be assigned by function

//**** GET ****//
const getRestaurant: string = `/restaurant${bizKey}`;
const getAllBookings: string = `/booking/restaurant/${companyId}`;
const getBooking: string = `/booking/${bookingId}`; //! Not static! (bookingId)
const getCustomer: string = `/booking/${customerId}`; //! Not static! (customerId)

//**** POST ****//
export const createRestaurant: string = '/restaurant/create';
const createCustomer: string = '/customer/create';
const createBooking: string = '/booking/create';

//**** PUT ****//**** ADMIN ****//
const updateBooking: string = `/booking/update${bookingId}`; //! Not static! (bookingId)
const updateCustomer: string = `/customer/update${customerId}`; //! Not static! (customerId)

//**** DELETE ****//**** ADMIN ****//
const deleteBooking: string = `/booking/delete${bookingId}`; //! Not static! (bookingId)

//---------------------------------------------------------------------------//

export const initBiz = () => {
	const res = axios
		.post(`${BASE_URL}${createRestaurant}`, {
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
	res.then((key) => setBizKey(key));
};

const callApi = async <T>(url: string) => {
	let response = await axios.get<T>(`${BASE_URL}${url}`);
	return response.data;
};

export const getBiz = async (): Promise<AxiosResponse<IBiz>> => {
	let response = await axios.get<AxiosResponse<IBiz>>(
		`${BASE_URL + getRestaurant}`
	);
	return response.data;
};
