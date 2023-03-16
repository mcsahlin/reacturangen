import styled from 'styled-components';
import { handleBookingRequest } from '../../utils/requests';

export const ButtonBooking = styled.button.attrs({
	type: 'submit',
	onClick: () => {
		handleBookingRequest();
	},
})`
	padding: 15px;
	margin: 5% 40% 5% 40%;
	border-radius: 3px;
	border: 1px solid #e70d52;
	color: #e70d52;
	background-color: transparent;
	letter-spacing: 0px;
	transition: all 0.4s;
	cursor: pointer;

	&:hover {
		color: white;
		background-color: #e70d52;
	}

	&:active {
		letter-spacing: 2px;
	}

	@media (min-width: 700px) {
		width: 20%;
	}
`;

export const GuestCountBtn = styled.button.attrs({})`
	box-sizing: border-box;
	margin-bottom: 30px;
	width: 20%;
	text-align: center;
	background-color: #ced3dc;
	color: #2c2f33;
	padding: 5px;

	border: 2px solid #e70d52;
	border-radius: 50%;
	transition: all 0.2s;
	:enabled {
		background-color: transparent;
		color: #2c2f33;
	}
	:nth-of-type(2) {
		border-color: green;
		:hover {
			background-color: green;
		}
	}
	:hover {
		background-color: #e70d52;
		color: white;
		transition: all 0.2s;
		border: 2px solid white;
		border-radius: 0.4rem;
	}
	: {
		background-color: transparent;
	}
`;
