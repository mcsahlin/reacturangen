import { useState } from 'react';
import { AdminContainer, AdminTable, AdminThead, AdminTr, ThId, NameTh, LastNameTh, DateTh, TimeTh, GuestsTh, AdimnBody, BodyTr, BodyTd, DeleteIcon } from '../components/styled/Admin.style';
import { ICustomer } from '../models/ICustomer';
import AiFillDelete from 'react-icons';

// interface Props {
// cutomer: ICustomer,
// }

export const Admin = () => {
	const [admin, setAdmin] = useState(false);

	// const handleDelete = (id: number) => {

	// }

	return (
		// TEST CODE
		<>
		<AdminContainer>
		<h2>Bokningar</h2>
			<AdminTable>
				<AdminThead>
					<AdminTr>
					<ThId>#</ThId>
					<NameTh>Namn</NameTh>
					<LastNameTh>Efternamn</LastNameTh>
					<DateTh>Datum</DateTh>
					<TimeTh>Tid</TimeTh>
					<GuestsTh>Antal</GuestsTh>
					</AdminTr>
				</AdminThead>
				<AdimnBody>
					<BodyTr>
						<BodyTd>{}</BodyTd>
						{/* <DeleteIcon onClick={() => handleDelete()}>
						<AiFillDelete />
						</DeleteIcon> */}
					</BodyTr>
				</AdimnBody>
			</AdminTable>
		</AdminContainer>
		</>
	);
	return <BodyTd>{}</BodyTd>
};
