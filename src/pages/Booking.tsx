import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  BookingHeading,
  BookingContainer,
} from "./../components/styled/BookingPage.style";
import { BookingCalendar } from "../components/Calendar/BookingCalendar";
import { BookingContext, BookingProvider } from "../contexts/BookingContext";

import { RegistrationForm } from "../components/ContactForm/CustomerRegistrationForm";
import { HomeSecondBackground } from "../components/HomeSecondBackground";
import { ICustomer } from "../models/ICustomer";
import { IBooking } from "../models/IBooking";
import { BASE_URL, restaurantId } from "../services/restaurantService";
import axios, { AxiosResponse } from "axios";
import { IBookingSmall } from "../models/IBookingSmall";
import { format, isBefore, isAfter, set } from "date-fns";

export const BookingForm = () => {
  const [admin, setAdmin] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("18:00");
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [bookings, setBookings] = useState<IBookingSmall[]>([]);
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showBookingForm, setShowBookingForm] = useState(false);
  const TotalTables = 12;

  useEffect(() => {
    const getBookings = async () => {
      const response = await axios.get<IBookingSmall[]>(
        `${BASE_URL}booking/restaurant/${restaurantId}`
      );
      setBookings(response.data);
    };
    getBookings();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(bookings);

    const matchBookings = bookings.filter(
      (booking: IBookingSmall) => booking.date === date && booking.time === time
    );

    const totalBookings = matchBookings.length;

    if (totalBookings < TotalTables) {
      try {
        const response = await axios.post(
          "https://school-restaurant-api.azurewebsites.net/booking/create",
          {
            restaurantId: "623b85d54396b96c57bde7c3",
            date,
            time,
            numberOfGuests,
            customer: {
              name,
              lastname,
              email,
              phone,
            },
          }
        );
        console.log(response.data);
        Swal.fire("Bokning skapad för " + date + " " + time);
      } catch (error) {
        console.log(error);
        Swal.fire(
          "Något gick fel, dubbeloklla uppfifterna så att allt är korrekt"
        );
      }
    }
    if (!date) return;

    setDate("");
    setTime("18:00");
    setNumberOfGuests(0);
    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };

  const currDate = new Date();

  let day = currDate.getDate();
  let month = currDate.getMonth() + 1;
  let year = currDate.getFullYear();
  let bookingDate = `${year}-${month}-${day}`;

  // //#region getAllBookings //* Klar
  // const getAll = async (): Promise<AxiosResponse<IBooking[]>> => {
  // 	const res = await axios.get<IBooking[]>(GET_BOOKINGS_URL);
  // 	console.log(res);
  // 	return res;

  // 	.then(async (res) => {
  // 			res.data.map((obj) => {
  // 				let a =
  // 					(obj.time, obj.restaurantId, obj.numberOfGuest, obj.date, obj.customer);
  // 				return a;
  // 			});
  // 		});
  // };
  // console.log(getAll());
  // //#endregion getAllBookings

  // //#region GET CUSTOMER  //* Nästan
  // const getCustomer = async () => {
  // 	const res = await axios
  // 		.get<ICustomer>(`${GET_CUSTOMER_URL}641379965ac3ee304c3401cc`)
  // 		.then((res) => {
  // 			return res.data;
  // 		});
  // 	console.log(res);
  // 	return res;
  // };
  // let cust = getCustomer();
  // cust.then((res) => {
  // 	return res.name;
  // });
  // console.log(cust);
  // //#endregion getCustomer

  const handleSearch = () => {};

  return (
    <div>
      <label htmlFor="date">Datum:</label>
      <input
        type="date"
        id="date"
        value={date}
        min={bookingDate}
        required
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="time">Tid:</label>
      <select
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="18:00">18:00</option>
        <option value="21:00">21:00</option>
      </select>

      <label htmlFor="numberOfGuests">Antal gäster:</label>
      <input
        type="number"
        id="numberOfGuest"
        min="1"
        max="6"
        required
        value={numberOfGuests}
        onChange={(e) => setNumberOfGuests(Number(e.target.value))}
      />

      <button onClick={handleSearch}>Sök</button>
      {showBookingForm && (
        <form onSubmit={handleSubmit}>
          <h2>
            Bokning för {date} kl {time}{" "}
          </h2>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="lastname">Efternamn:</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <label htmlFor="email">E-post:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="phone">Telefonnummer:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <button type="submit">Skapa bokning</button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
