import { createContext, useState } from 'react';
import { bizKey } from '../services/restaurantService';

export interface IBookingContext {
	restaurantId: string;
	date: string;
	time: string;
	numberOfGuests: number;
	setDate: (date: string) => void;
	setTime: (time: string) => void;
	setNumberOfGuests: (guestCount: number) => void;
}

export const defaultBookingContextValues: IBookingContext = {
	restaurantId: bizKey,
	date: '',
	time: '',
	numberOfGuests: NaN,
	setDate: () => {},
	setTime: () => {},
	setNumberOfGuests: () => {},
};

export const BookingContext = createContext<IBookingContext>(
	defaultBookingContextValues
);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [restaurantId, setRestaurantId] = useState<string>('');
	const [date, setDate] = useState<string>('');
	const [time, setTime] = useState<string>('');
	const [numberOfGuests, setNumberOfGuests] = useState<number>(NaN);
	return (
		<BookingContext.Provider
			value={{
				restaurantId,
				date,
				time,
				numberOfGuests,
				setDate,
				setTime,
				setNumberOfGuests,
			}}
		>
			{children}
		</BookingContext.Provider>
	);
};
