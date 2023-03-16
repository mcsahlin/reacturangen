import React from 'react';
import { useState, useContext } from 'react';
import { UserInput } from './styled/Inputs';
import { Form } from './styled/Forms';
import { FormWrapper, DualInputWrapper, LabelDiv, StyledLabel, DualInputWrapperSecond  } from './styled/Forms';
import { BookingContext } from '../contexts/BookingContext';
import { CustomerContext } from '../contexts/CustomerContext';
import { ButtonBooking } from './styled/Buttons';
interface IFormState {
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
}
interface IFormProps {
	children: React.ReactNode;
}
export const CustomerRegistrationForm = (props: IFormProps) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [form, setForm] = useState<IFormState>({
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
	});

	const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// Get the name of the field that caused this change event
		// Get the new value of this field
		const { name, value } = event.target;

		// Assign new value to the appropriate form field
		const updatedForm: IFormState = {
			...form,
			[name]: value,
		};

		console.log('Form changed: ', updatedForm);

		// Update state
		setForm(updatedForm);
	};

	const bookingContext = useContext(CustomerContext);

	return (
		<FormWrapper>
			
			{/* <CustomerContext.Provider> */}
			<Form>
				<DualInputWrapper>
					<LabelDiv>
					<StyledLabel>Förnamn:</StyledLabel>
					</LabelDiv>
					<UserInput type="text" placerholder='Förnamn' onChange={(e: Event) => {}} name="Förnamn" id="Förnamn" requierd />
					<LabelDiv>
					<StyledLabel>Efternamn:</StyledLabel>
					</LabelDiv>
					<UserInput type="text" placerholder='Efternamn' onChange={(e: Event) => {}} name="Efternamn" id="Efternamn" requierd />
				</DualInputWrapper>

				<DualInputWrapperSecond>
					<LabelDiv>
					<StyledLabel>Email:</StyledLabel>
					</LabelDiv>
					<UserInput type="text" placerholder='Email' onChange={(e: Event) => {}} name="Email" id="Email" requierd />
					<LabelDiv>
					<StyledLabel>Telefon:</StyledLabel>
					</LabelDiv>
					<UserInput type="text" placerholder='Telefon' onChange={(e: Event) => {}} name="Telefon" id="Telefon" requierd />
				</DualInputWrapperSecond>
				<ButtonBooking className='btnB'>Slutför</ButtonBooking>
			</Form>
			{/* </CustomerContext.Provider> */}
		</FormWrapper>
	);
};
