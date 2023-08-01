import { IBookingProps } from "../../models/IBookingProps";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { ICustomer } from "../../models/ICustomer";
import { get_bookings, get_customers } from "../../services/restaurantService";
import { Booking } from "../Admin/bookingModel";
import { IBooking } from "../../models/IBooking";

const BookingInfo = (props: IBookingProps) => {
  const [findbooking, setFindBooking] = useState<ICustomer>();
  useEffect(() => {
    const getData = async () => {
      let bookingInfo = await get_customers(props.booking.date);
      setFindBooking(bookingInfo[0]);
    };
    if (findbooking) return;
    getData();
  });
  return <>{BookingInfo}</>;
};

export const Bookings = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [filterbookings, setFilterBookings] = useState<IBooking[]>([]);
  const [findbooking, setFindBooking] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let filteredBookings = bookings.filter((x) => x.date === findbooking);
    setFilterBookings(filteredBookings);
    console.log(findbooking);
  };

  useEffect(() => {
    const getData = async () => {
      let allBookings = await get_bookings();
      setBookings(allBookings);
      setFilterBookings(allBookings);
    };

    if (bookings.length > 0) return;
    getData();
  }, []);
  const handleclick = () => {
    setFilterBookings(bookings);
    setFindBooking("");
  };

  let bookingsHtml = filterbookings.map((booking) => {
    return <Booking booking={booking} key={booking._id} />;
  });

  return (
    <section>
      <form id="searchForm" onSubmit={handleSubmit}>
        <p>Sök bokning</p>
        <div>
          <input
            type="text"
            id="findbooking"
            value={findbooking}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFindBooking(e.target.value);
            }}
          />

          <button>Sök</button>
        </div>
      </form>
      <button onClick={handleclick}>Visa alla</button>
      <div id="bookingContainer"></div>
      <table>
        <thead>
          <tr>
            <th>Bokning ID</th>
            <th>Datum</th>
            <th>Tid</th>
            <th>Gäster</th>
            <th>ID</th>
            <th>Förnamn</th>
            <th>Efternamn</th>
            <th>E-mail</th>
            <th>Telefon</th>
          </tr>
        </thead>
        <tbody>{bookingsHtml}</tbody>
      </table>
    </section>
  );
};
