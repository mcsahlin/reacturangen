import React from 'react';
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
// const NewBookingContext = React.createContext<INewBookingContext>({});
