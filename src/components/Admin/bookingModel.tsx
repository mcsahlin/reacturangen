import { useEffect, useState } from "react";
import { IBookingProps } from "../../models/IBookingProps";
import { ICustomer } from "../../models/ICustomer";
import { deleteBooking, get_customers } from "../../services/restaurantService";
import { TdBooking } from "../styled/NewAdminStyle";

export const Booking = (props: IBookingProps) => {
  const [customer, setCustomer] = useState<ICustomer>();
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      let allCustomers = await get_customers(props.booking.customerId);
      setCustomer(allCustomers[0]);
      console.log(allCustomers);
    };
    if (customer) return;
    getData();
  }, [customer, props.booking.customerId]);

  const handleDeleteClick = () => {
    deleteBooking(props.booking._id);
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null;
  }

  return (
    <>
      <tr>
        <TdBooking>{props.booking._id}</TdBooking>
        <TdBooking>{props.booking.date}</TdBooking>
        <TdBooking>{props.booking.time}</TdBooking>
        <TdBooking>{props.booking.numberOfGuests}</TdBooking>
        <TdBooking>{props.booking.customerId}</TdBooking>
        <TdBooking>{customer?.name}</TdBooking>
        <TdBooking>{customer?.lastname}</TdBooking>
        <TdBooking>{customer?.email}</TdBooking>
        <TdBooking>{customer?.phone}</TdBooking>
        <TdBooking>
          <button onClick={handleDeleteClick}>Ta bort</button>
        </TdBooking>
      </tr>
    </>
  );
};
