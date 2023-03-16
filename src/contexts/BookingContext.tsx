import { createContext } from 'react';
import { ICustomer } from '../models/ICustomer';
import { useState } from 'react';

interface INewBookingContext {
	restaurantId: string;
	date: string;
	time: string;
	numberOfGuests: number;
	customer: {
		name: string;
		lastname: string;
		email: string;
		phone: string;
	};
}
// export const NewBookingProvider = createContext<INewBookingContext>({});

interface IBookingContextType {
	date: string;
	//TODO# Stoppa i datum från fält
	//* Skapa fält

	time: string;
	//TODO# API anrop getBookings
	//*
	numberOfGuests: number; //TODO#		HeadCount.value
	customer: ICustomer | any; //TODO#			Registrera kund form
	setDate: (date: string) => void;
	setTime: (time: string) => void;
	setNumberOfGuests: (numberOfGuests: number) => void;
	setCustomer: (customer: ICustomer | undefined) => void;
} //* Innan denna kan användas måste customer registreras

const defaultContextValue: IBookingContextType = {
	date: '',
	time: '',
	numberOfGuests: NaN,
	customer: undefined,
	setDate: () => {},
	setTime: () => {},
	setNumberOfGuests: () => {},
	setCustomer: () => {},
};

export const BookingContext = createContext(defaultContextValue);
