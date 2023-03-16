import React from 'react';
import { useState, useContext } from 'react';
import { UserInput } from './styled/Inputs';
import { Form } from './styled/Forms';
import { FormWrapper, DualInputWrapper } from './styled/Wrappers';
import { Button } from './styled/Buttons';
import { BookingContext } from '../contexts/BookingContext';
import { CustomerContext } from '../contexts/CustomerContext';

export const CustomerRegistrationForm = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [firstname, setFirstname] = useState<string>();
	const [lastname, setLastname] = useState<string>();
	const [email, setEmail] = useState<string>();
	const [phone, setPhone] = useState<string>();

	const bookingContext = useContext(CustomerContext);

	return (
		<FormWrapper>
			{/* <CustomerContext.Provider> */}
			<Form>
				<DualInputWrapper>
					<UserInput placerholder='Förnamn'></UserInput>

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
