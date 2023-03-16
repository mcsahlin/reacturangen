import React from 'react';
import { useState, useEffect } from 'react';
import {
	CalendarContainer,
	BannerContainer,
	BorderContainer,
	DaysContainer,
	DaysBorderBoxes,
	DateBorderBox,
	TableBody,
} from './styled/BookingCalendar.style';
interface ICalendarProps {
	selected: boolean;
}
export const BookingCalendar = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [year, setYear] = useState<number>(new Date().getFullYear());
	const [month, setMonth] = useState<number>(new Date().getMonth());
	const [day, setDay] = useState<number>(new Date().getDay());
	const [dayOne, setDayOne] = useState<number>(day - (day - 1));
	const [daySlice, setDayStr] = useState<string>(Date().slice(0, 3));
	const [selectedDay, setSelectedDay] = useState<string>();
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

	const dayData = <td>{}</td>;

	useEffect(() => {
		if (!loading) return;
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
		console.log(selectedDay, month, year);
	}, [selectedDay]);
	//#endregion set listener

	//#region checkAvailability

	//#endregion checkAvailability
	return (
		<CalendarContainer>
			<BorderContainer>
				<BannerContainer>
					<h3>
						{dayTranslator()} den {day} {months[month]}, {year}
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
	);
};
