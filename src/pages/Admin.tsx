import { useState } from "react";
import {
  AdminContainer,
  AdminTable,
  AdminThead,
  AdminTr,
  Th,
  AdimnBody,
  BodyTr,
  BodyTd,
  DeleteIcon,
} from "../components/styled/Admin.style";
import { ICustomer } from "../models/ICustomer";
import AiFillDelete from "react-icons";
import Booking from "./Booking";
import { Bookings } from "../components/Admin/bookingView";

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
      <Bookings />
      <AdminContainer>
        <h2>Bokningar</h2>
        <AdminTable>
          <AdminThead>
            <AdminTr>
              <Th>#</Th>
              <Th>Namn</Th>
              <Th>Efternamn</Th>
              <Th>Datum</Th>
              <Th>Tid</Th>
              <Th>Antal</Th>
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
  return <BodyTd>{}</BodyTd>;
};
