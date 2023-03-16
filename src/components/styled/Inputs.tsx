import styled from 'styled-components';

interface IInputProps {
	placeholder: string;
}

export const UserInput = styled.input.attrs((props: IInputProps) => ({
	type: 'text',
	placeholder: (props: IInputProps) => props.placeholder || 'Vänligen fyll i..',
}))`
	font-size: 1.5rem;
	font-family: inherit;
	color: #000000;
	padding: 10px 10px;
	border-radius: 3px;
	background-color: rgba(255, 255, 255, 0.5);
`;
export const GuestCountInput = styled(UserInput).attrs({ type: 'number' })``;

export const FirstNameInput = styled(UserInput)``;
export const LastNameInput = styled(UserInput)``;
export const EmailInput = styled(UserInput)``;
export const PhoneNumber = styled(UserInput)``;
