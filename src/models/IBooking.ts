import { ICustomer } from './ICustomer';
export interface IBooking {
	_id: string;
	restaurantId: string;
	date: string;
	time: string;
	numberOfGuest: number;
	customer: ICustomer;
}


