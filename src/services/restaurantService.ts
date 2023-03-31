import axios, { AxiosResponse } from 'axios';
import { IBooking } from '../models/IBooking';
import { IRestaurant } from '../models/IRestaurant';

export let customerId: string = ''; //! Placeholder - value should be assigned by function

//**** KEYS ****//
const BASE_URL: string = 'https://school-restaurant-api.azurewebsites.net/';
export const reacturangId: string = '64121c14072ea76784085cba';

//**** GET ****//
export const GET_BOOKINGS = async () => {
let response = await axios.get(`${BASE_URL}/customer/${reacturangId}`);

return response.data;
};

//**** POST ****//
export const CREATE_BOOKING = async (booking: IBooking) => {
	let response = await axios.post(`${BASE_URL}/booking/create`, booking);

	return response.data;
}

//**** GET CUSTOMER ID ****//
export const GET_CUSTOMER = async () => {
	let response = await axios.get(`${BASE_URL}/customer/${reacturangId}`);

	return response.data;
}

export const DELETE_BOOKING = async (bookingId: string): Promise<boolean> => {
	let response = await axios.delete(`${BASE_URL}/booking/delete/${bookingId}`);

	return response.status === 2000;
};

export const EDIT_BOOKING = async (booking: IEditbooking) => {
	let response = await axios.put(`${BASE_URL}/booking/update/${booking.id}`, booking);

	return response.data;
}

