import React from 'react';
import { useState, useContext } from 'react';
import { UserInput } from '../styled/Inputs';
import './RegistrationForm.css';


interface IFormState {
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
}
const IFormProps = {
	firstname: '',
	lastname: '',
	email: '',
	phone: '',
}
export const RegistrationForm = () => {
	const onSubmit = (event: FormEventHandler<HTMLFormElement>) => {
		event.preventDeafaoult();

		const target = event.target;

		const data = {
			firstname: target.firstname.value,
			lastname: target.lastname.value
		}
	}
	// const [loading, setLoading] = useState<boolean>(true);
	// const [formData, setFormData] = useState<IFormState>(IFormProps);

	// const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setFormData((prevState) => ({
	// 		...prevState, [event.target.id]: event.target.value,
	// 	}))
	// 	};

	// 	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
	// 		event.preventDefault();
	// 		console.log(formData);
	// 		setFormData(IFormProps)
			
	// 	}

	return (
	<>
	<div className='container user-page'>
			{/* <CustomerContext.Provider> */}
			<div className='user-form'>
              <form onSubmit={onSubmit}>
                <ul>
                  <li className='half'>
                      <input type="text" name='förnamn' placeholder='Förnamn'  required />
                  </li>
                  <li className='half'>
                      <input type='text' name='efternamn' placeholder='Efternamn'  required />
                  </li>
                  <li>
                    <input type='email' name='email' placeholder='Email' required />
                  </li>
				  <li>
                    <input type='tel' name='phone' placeholder='Mobil' required />
                  </li>
                  <li>
                    <input type="submit" className='flat-button' value="SEND" /> 
                  </li>
                </ul>
              </form>
            </div>
			</div>
			{/* </CustomerContext.Provider> */}
			</>
	);
};
