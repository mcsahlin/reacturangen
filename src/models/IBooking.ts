import { ICustomer } from './ICustomer';
export interface IBooking {
	restaurantId: string;
	date: string;
	time: string;
	numberOfGuest: number;
	customer: ICustomer;
}
