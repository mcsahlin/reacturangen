import { useEffect, useState } from "react";
import { IBookingProps } from "../../models/IBookingProps";
import { ICustomer } from "../../models/ICustomer";
import { deleteBooking, get_customers } from "../../services/restaurantService";

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
        <td>{props.booking._id}</td>
        <td>{props.booking.customerId}</td>
        <td>{props.booking.date}</td>
        <td>{props.booking.time}</td>
        <td>{props.booking.numberOfGuest}</td>
        <td>{customer?.name}</td>
        <td>{customer?.lastname}</td>
        <td>{customer?.email}</td>
        <td>{customer?.phone}</td>
        <td>
          <button onClick={handleDeleteClick}>Ta bort</button>
        </td>
      </tr>
    </>
  );
};