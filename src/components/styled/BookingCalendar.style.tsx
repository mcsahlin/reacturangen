import styled from 'styled-components';
// interface IDateBorderBox {
// 	selected: boolean;
// }
//* Till DateBorderBox för highlighting vid klick, interface ovan
/* background-color: ${(props: IDateBorderBox) =>
		props.selected ? SELECTED_BG_CLR : SELECTED_TXT_CLR};
	color: ${(props: IDateBorderBox) =>
		props.selected ? SELECTED_TXT_CLR : TXT_CLR}; */
const SELECTED_BG_CLR = '#E70D52';
const SELECTED_TXT_CLR = '#CED3DC';
const TXT_CLR = '#131301';

export const CalendarContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const BorderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 450px;
	height: 450px;
	background-color: #2c2f33;
	border-radius: 6px;
`;

export const BannerContainer = styled.div`
	letter-spacing: 3px;
	border-bottom: 1px solid #ced3dc;
	color: white;
`;

export const DaysContainer = styled.div`
	letter-spacing: 3px;
`;

export const DaysBorderBoxes = styled.th`
	height: 50px;
	padding: 5px;
	text-align: center;
	color: white;
`;

export const DateBorderBox = styled.td`
	width: 45px;
	height: 45px;
	background-color: #ced3dc;
	border-radius: 6px;
	padding: 2px;
	text-align: center;
	cursor: pointer;
	transition: 0.5s all;

	&:hover {
		background-color: #2c2f33;
		box-shadow: 0 3px 6px 0;
	}
`;

export const TableBody = styled.tbody`
	margin-top: 20px;
`;
