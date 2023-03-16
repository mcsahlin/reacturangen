import styled from 'styled-components';
import { handleBookingRequest } from '../../utils/requests';

export const Button = styled.button.attrs({
	type: 'submit',
	onClick: () => {
		handleBookingRequest();
	},
})`
	padding: 10px;
	width: 100%;
	height: 15px;
	background-color: green;
	color: white;
`;
