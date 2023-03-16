import { createContext } from 'react';
import { ICustomer } from '../models/IPostCustomer';
import { useState } from 'react';

export interface INewBookingContext {
	restaurantId: string;
	date: string;
	time: string;
	numberOfGuests: number;
	setNumberOfGuests(): void;
	customer: {
		name: string;
		lastname: string;
		email: string;
		phone: string;
	};
}
export const NewBookingProvider = createContext<INewBookingContext>(
	{} as INewBookingContext
);

export interface IBookingContextType {
	date: string;
	//TODO# Stoppa i datum från fält
	//* Skapa fält

	time: string;
	//TODO# API anrop getBookings
	//*
	numberOfGuests: number; //TODO#		HeadCount.value
	customer: ICustomer | any; //TODO#			Registrera kund form
	setDate(date: string): void;
	setTime(time: string): void;
	setNumberOfGuests(numberOfGuests: number): void;
	setCustomer(customer: ICustomer | undefined): void;
} //* Innan denna kan användas måste customer registreras

// export const defaultContextValue: IBookingContextType = {
// 	date: '',
// 	time: '',
// 	numberOfGuests: NaN,
// 	customer: undefined,
// 	setDate: () => {},
// 	setTime: () => {},
// 	setNumberOfGuests: () => {},
// 	setCustomer: () => {},
// };

export const BookingContext = createContext({} as IBookingContextType);
