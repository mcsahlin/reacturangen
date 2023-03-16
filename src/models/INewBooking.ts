import { ICustomer } from './IPostCustomer';
export interface INewBooking {
	restaurantId: string;
	date: string;
	time: string;
	numberOfGuest: number;
	customer: ICustomer;
}
