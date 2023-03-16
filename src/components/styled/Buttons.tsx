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
border: 1px solid #E70D52;
color: #E70D52;
background-color: transparent;
letter-spacing: 0px;
transition: all 0.4s;
cursor: pointer;

&:hover {
    color: white;
    background-color: #E70D52;
}

&:active {
letter-spacing: 2px;
}

@media (min-width: 700px) {
		width: 20%;
	}
`;
