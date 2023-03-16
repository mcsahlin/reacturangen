import styled from 'styled-components';

interface IInputProps {
	placeholder: string;
}

export const UserInput = styled.input.attrs((props: IInputProps) => ({
	type: 'text',
	placeholder: (props: IInputProps) => props.placeholder || 'Vänligen fyll i..',
}))`
	width: 50px;
	height: 15px;
	color: green;
	border: none;
	outline: none;
	border-bottom: 2px solid black;
	:hover {
		// style
	}
`;
export const GuestCountInput = styled(UserInput).attrs({ type: 'number' })``;

export const FirstNameInput = styled(UserInput)``;
export const LastNameInput = styled(UserInput)``;
export const EmailInput = styled(UserInput)``;
export const PhoneNumber = styled(UserInput)``;
