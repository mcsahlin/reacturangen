import axios from "axios";
import { IBooking } from "../models/IBooking";
import { ICustomer } from "../models/ICustomer";

//**** KEYS ****//
export const restaurantId: string = `623b85d54396b96c57bde7c3`;
export const BASE_URL: string = `https://school-restaurant-api.azurewebsites.net/`;

//**** GET ****//
export const get_bookings = async () => {
  let response = await axios.get(
    `${BASE_URL}booking/restaurant/${restaurantId}`
  );
  return response.data;
};

export const get_Booking = async (bookingId: string) => {
  let response = await axios.get(`${BASE_URL}booking/${bookingId}`);

  return response.data as IBooking;
};
export const GET_CUSTOMER_URL: string = `${BASE_URL}booking/`;

export const get_customers = async (id: string): Promise<ICustomer[]> => {
  let response = await axios.get<ICustomer[]>(`${BASE_URL}/customer/` + id);

  return response.data;
};

//*****POST*****//
export const create_customer = async () => {
  let response = await axios.post(`${BASE_URL}/booking/create`);

  return response.data;
};

//*****DELETE*****//

export const deleteBooking = async (bookingId: string): Promise<boolean> => {
  let response = await axios.delete(`${BASE_URL}/booking/delete/${bookingId}`);

  return response.status === 200;
};
