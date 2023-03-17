import React from 'react';
import { eachDayOfInterval, format } from 'date-fns';
import { useState, useEffect, useContext } from 'react';
import { BookingContext } from '../contexts/BookingContext';
import {
	CalendarContainer,
	SeclectGuests as SelectGuests,
	BannerContainer,
	BorderContainer,
	DaysContainer,
	DaysBorderBoxes,
	DateBorderBox,
	TableBody,
} from './styled/BookingCalendar.style';
import { ButtonBooking, GuestCountBtn } from './styled/Buttons';
import { GuestCountWrapper } from './styled/Wrappers';
interface ICalendarProps {
	selected: boolean;
}
export const BookingCalendar = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [now, setNow] = useState(new Date(Date.now()));
	const [year, setYear] = useState<number>(new Date().getFullYear());
	const [month, setMonth] = useState<number>(new Date().getMonth());
	const [day, setDay] = useState<number>(new Date().getDay());
	const [daySlice, setDayStr] = useState<string>(Date().slice(0, 3));
	const [selectedDate, setSelectedDate] = useState<string>();
	const [selectedTime, setSelectedTime] = useState<string>();
	const [selectedGuestCount, setSelectedGuestCount] = useState<string>();
	const [selectedDay, setSelectedDay] = useState<string>();
	const bookingContext = useContext(BookingContext);
	const { setNumberOfGuests, setDate, setTime, date } = bookingContext;
	const startDate = new Date();
	const endDate = new Date();
	endDate.setMonth(startDate.getMonth() + 1);
	const dates = eachDayOfInterval({ start: startDate, end: endDate });
	const dateOptions = dates.map((date) => (
		<option
			onClick={() => {
				setDate(format(date, 'yyyy-MM-dd'));
				console.log(date);
			}}
			key={date.getTime()}
			value={format(date, 'yyyy-MM-dd')}
		>
			{format(date, 'EEEE, MMMM d')}
		</option>
	));
	const today = now;
	const months: string[] = [
		'Januari',
		'Februari',
		'Mars',
		'April',
		'Maj',
		'Juni',
		'Juli',
		'Augusti',
		'September',
		'Oktober',
		'November',
		'December',
	];

	//* Månadsnummer och dagar per månad
	//* Matcha månad med antal dagar för att veta hur kalender ska loopas ut
	//* Hämta dagsnummer från DayOne = DagensDatum - DagensDatum + 1
	//* Börja loopa ut på rad ett från dagsnummer === dayone
	//* Negativ nästlad forloop tills antal dagar är printade
	const dateObj = {
		1: 31,
		2: 28,
		3: 31,
		4: 30,
		5: 31,
		6: 30,
		7: 31,
		8: 31,
		9: 30,
		10: 31,
		11: 30,
		12: 31,
	};

	const dayTranslator = (): string => {
		switch (daySlice) {
			case 'Mon':
				return 'Måndag' as string;
			case 'Tue':
				return 'Tisdag' as string;
			case 'Wen':
				return 'Onsdag' as string;
			case 'Thu':
				return 'Torsdag' as string;
			case 'Fri':
				return 'Fredag' as string;
			case 'Sat':
				return 'Lördag' as string;
			case 'Sun':
				return 'Söndag' as string;
			default:
				return 'Error' as string;
		}
	};

	// let daysThisMonth = now.getMonth;
	// for (let i = 0; i < array.length; i++) {
	// 	const element = array[i];
	// }

	useEffect(() => {
		if (!loading) return;
		setDay(new Date().getDay());
		setLoading(false);
	}, []);

	//#region set listener
	//* Samla alla td element i en lista
	const dayBox = document.getElementsByTagName('td');
	//* Loopa igenom alla td element, fäst eventListener och uppdatera selectedDay statet;
	for (let i = 0; i < dayBox.length; i++) {
		const element = dayBox[i];
		element.addEventListener('click', () => {
			setSelectedDay(element.innerHTML);
		});
	}
	//* useEffect lyssnar på förändring av statet selectedDay
	useEffect(() => {
		if (loading) return;
		console.log(selectedDay, now, year);
	}, [selectedDay]);
	//#endregion set listener

	//#region checkAvailability

	//#endregion checkAvailability

	const handleChange = (e: React.ChangeEvent) => {
		console.log(e.currentTarget.ariaValueNow);
	};

	return (
		<>
			<CalendarContainer>
				<h4>Välj antal personer:</h4>
				<div>
					<label htmlFor='dateOptions'>Datum: </label>
					<select id='dateOptions' onChange={(e: React.ChangeEvent) => {}}>
						{dateOptions}
					</select>
				</div>
				<div>
					<label htmlFor='timeOptions'>Antal personer: </label>
					<select id='timeOptions'>
						<option>18:00</option>
						<option>21:00</option>
					</select>
				</div>
				<div>
					<label htmlFor='guestCount'>Antal personer: </label>
					<select id='guestCount'>
						<option selected value={1}>
							1
						</option>
						<option selected value={2}>
							2
						</option>
						<option selected value={3}>
							3
						</option>
						<option selected value={4}>
							4
						</option>
						<option selected value={5}>
							5
						</option>
						<option selected value={6}>
							6
						</option>
					</select>
				</div>
				<GuestCountWrapper>
					<GuestCountBtn>-</GuestCountBtn>
					<SelectGuests
						name='guests'
						id='guests'
						onChange={(e: React.ChangeEvent) => handleChange(e)}
					/>
					<GuestCountBtn>+</GuestCountBtn>
				</GuestCountWrapper>
				<BorderContainer>
					<BannerContainer>
						<h3>
							{dayTranslator()} den {now.getDate()} {months[month]}, {year}
						</h3>
					</BannerContainer>
					<DaysContainer>
						<table className='cal__table'>
							<thead>
								<tr>
									<DaysBorderBoxes>Mån</DaysBorderBoxes>
									<DaysBorderBoxes>Tis</DaysBorderBoxes>
									<DaysBorderBoxes>Ons</DaysBorderBoxes>
									<DaysBorderBoxes>Tor</DaysBorderBoxes>
									<DaysBorderBoxes>Fre</DaysBorderBoxes>
									<DaysBorderBoxes>Lör</DaysBorderBoxes>
									<DaysBorderBoxes>Sön</DaysBorderBoxes>
								</tr>
							</thead>
							<TableBody>
								<tr className='cal__row cal__row--dates'>
									{/*ROW 1*/}
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<DateBorderBox>1</DateBorderBox>
									<DateBorderBox>2</DateBorderBox>
									<DateBorderBox>3</DateBorderBox>
								</tr>
								<tr className='cal__row cal__row--dates'>
									<DateBorderBox>4</DateBorderBox>
									<DateBorderBox>5</DateBorderBox>
									<DateBorderBox>6</DateBorderBox>
									<DateBorderBox>7</DateBorderBox>
									<DateBorderBox>8</DateBorderBox>
									<DateBorderBox>9</DateBorderBox>
									<DateBorderBox>10</DateBorderBox>
								</tr>
								<tr className='cal__row cal__row--dates'>
									<DateBorderBox>11</DateBorderBox>
									<DateBorderBox>12</DateBorderBox>
									<DateBorderBox>13</DateBorderBox>
									<DateBorderBox>14</DateBorderBox>
									<DateBorderBox>15</DateBorderBox>
									<DateBorderBox>16</DateBorderBox>
									<DateBorderBox>17</DateBorderBox>
								</tr>
								<tr className='cal__row cal__row--dates'>
									<DateBorderBox>18</DateBorderBox>
									<DateBorderBox>19</DateBorderBox>
									<DateBorderBox>20</DateBorderBox>
									<DateBorderBox>21</DateBorderBox>
									<DateBorderBox>22</DateBorderBox>
									<DateBorderBox>23</DateBorderBox>
									<DateBorderBox>24</DateBorderBox>
								</tr>
								<tr className='cal__row cal__row--dates'>
									<DateBorderBox>25</DateBorderBox>
									<DateBorderBox>26</DateBorderBox>
									<DateBorderBox>27</DateBorderBox>
									<DateBorderBox>28</DateBorderBox>
									<DateBorderBox>29</DateBorderBox>
									<DateBorderBox>30</DateBorderBox>
									<DateBorderBox>31</DateBorderBox>
								</tr>
							</TableBody>
						</table>
					</DaysContainer>
				</BorderContainer>
			</CalendarContainer>
		</>
	);
};
