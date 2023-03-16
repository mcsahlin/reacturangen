import styled from 'styled-components';

interface IInputProps {
	placeholder: string;
}

export const UserInput = styled.input.attrs((props: IInputProps) => ({
	type: 'text',
	placeholder: (props: IInputProps) => props.placeholder || 'Vänligen fyll i..',
}))`
	font-size: 1rem;
	font-family: inherit;
	color: #000000;
	border-radius: 3px;
	background-color: #ced3dc;
	border: none;
	border-bottom: 3px solid transparent;
	max-width: 100%;
	margin: 10px;
	display: block;
	transition: all 0.3s;
	justify-content: right;

	&:focus {
		outline: none;
		box-shadow: 0 1rem 2rem;
		border-bottom: 3px solid green;
	}
	&:focus:invalid {
		border-bottom: 3px solid #E70D52;
	}

	&:placeholder-shown {
		opacity: 1;
		visibility: hidden;
		transform: translateY(-4rem);
	}
`;
export const GuestCountInput = styled(UserInput).attrs({ type: 'number' })``;

export const FirstNameInput = styled(UserInput)``;
export const LastNameInput = styled(UserInput)``;
export const EmailInput = styled(UserInput)``;
export const PhoneNumber = styled(UserInput)``;
