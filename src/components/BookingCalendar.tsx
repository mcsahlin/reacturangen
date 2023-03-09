import React from 'react';
import { useState, useEffect } from 'react';

export const BookingCalendar = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [year, setYear] = useState<number>(new Date().getFullYear());
	const [month, setMonth] = useState<number>(new Date().getMonth());
	const [day, setDay] = useState<number>(new Date().getDay());
	const [dayOne, setDayOne] = useState<number>(day - (day - 1));
	const [daySlice, setDayStr] = useState<string>(Date().slice(0, 3));
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

	('Thu 3 2012 ');

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

	return (
		<div className='cal'>
			<div className='cal__banner'>
				<h3 className='cal__banner-date'>
					{dayTranslator()} den {day} {months[month]}, {year}
				</h3>
			</div>

			<div className='cal__container'>
				<table className='cal__table'>
					<thead className='cal__head'>
						<tr className='cal__row cal__row--head'>
							<th className='cal__day'>Mån</th>
							<th className='cal__day'>Tis</th>
							<th className='cal__day'>Ons</th>
							<th className='cal__day'>Tor</th>
							<th className='cal__day'>Fre</th>
							<th className='cal__day'>Lör</th>
							<th className='cal__day'>Sön</th>
						</tr>
					</thead>
					<tbody className='cal__body'>
						<tr className='cal__row cal__row--dates'>
							{/*ROW 1*/}
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td>1</td>
							<td>2</td>
							<td>3</td>
						</tr>
						<tr className='cal__row cal__row--dates'>
							<td>4</td>
							<td>5</td>
							<td>6</td>
							<td>7</td>
							<td>8</td>
							<td>9</td>
							<td>10</td>
						</tr>
						<tr className='cal__row cal__row--dates'>
							<td>11</td>
							<td>12</td>
							<td>13</td>
							<td>14</td>
							<td>15</td>
							<td>16</td>
							<td>17</td>
						</tr>
						<tr className='cal__row cal__row--dates'>
							<td>18</td>
							<td>19</td>
							<td>20</td>
							<td>21</td>
							<td>22</td>
							<td>23</td>
							<td>24</td>
						</tr>
						<tr className='cal__row cal__row--dates'>
							<td>25</td>
							<td>26</td>
							<td>27</td>
							<td>28</td>
							<td>29</td>
							<td>30</td>
							<td>31</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};
