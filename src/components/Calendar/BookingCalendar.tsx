import React, { useState } from 'react';
import { FC } from 'react';
import Calendar from 'react-calendar';
import './BookingCalendar.css';
import {add, format} from 'date-fns';
import { INTERVAL, STORE_CLOSING_TIME, STORE_OPENING_TIME } from './constants/config';

interface BookingCalendarProps {
}

interface DateType {
	justDate: Date | null;
	dateTime: Date | null;
}

export const BookingCalendar: FC<BookingCalendarProps> = ({}) => {
	const [date, setDate] = useState<DateType>({
		justDate: null,
		dateTime: null,
	});

	console.log(date.dateTime);
	

	const getTimes = () => {
		if(!date.justDate) return

		const { justDate } = date

		const beginning = add(justDate, { hours: STORE_OPENING_TIME })
		const end = add(justDate, { hours: STORE_CLOSING_TIME })
		const interval = INTERVAL // in minutes

		const times = [];
		for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
			times.push(i)
		}
		return times
	}

	const times = getTimes();

	return (
		<>
		<div className='h-screen flex flex-col justify-center'>
			{date.justDate ? (
				<div className='flex gap-4'>
					{times?.map((time, i) => (
						<div key={`time-${i}`} className='rounded-sm bg-gray-100 p-2'>
							<button type='button' onClick={() => setDate((prev) => ({...prev, dateTime: time}))}>
								{format(time, 'kk:mm')}
							</button>
						</div>
					))}
				</div>
			) : (
			<Calendar 
			minDate={new Date()}
			className='REACT-CALENDAR p-2' view='month' 
			onClickDay={(date) => setDate((prev) => ({ ...prev, justDate: date }))} />)}
		</div>
				
		</>
	);
};
