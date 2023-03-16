import React from 'react';
import { useState, useContext } from 'react';
import { UserInput } from './styled/Inputs';
import { Form } from './styled/Forms';
import { FormWrapper, DualInputWrapper } from './styled/Wrappers';
import { Button } from './styled/Buttons';
import { BookingContext } from '../contexts/BookingContext';
import { CustomerContext } from '../contexts/CustomerContext';
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
					<UserInput placerholder='Förnamn' onChange={(e: Event) => {}}></UserInput>

					<UserInput placerholder='Efternamn'></UserInput>
				</DualInputWrapper>
				<DualInputWrapper>
					<UserInput placerholder='Epost'></UserInput>
					<UserInput placerholder='Telefon'></UserInput>
				</DualInputWrapper>
				<Button>Bekräfta bokning</Button>
			</Form>
			{/* </CustomerContext.Provider> */}
		</FormWrapper>
	);
};
