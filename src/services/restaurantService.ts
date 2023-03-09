import axios from 'axios';
import { IBooking } from '../models/IBooking';

const BASE_URL = 'https://school-restaurant-api.azurewebsites.net/';
const restaurant = 'restaurant/:id';
const create = 'restaurant/create';
const booking = 'restaurant/booking';

export const callApi = async (): Promise<IBooking[]> => {
	let response = await axios.get<IBooking[]>(`BASE_URL/${create}`);

	return response.data;
};
