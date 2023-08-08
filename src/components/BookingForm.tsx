import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { format, isBefore, isAfter } from "date-fns";
import { IBookingSmall } from "../models/IBookingSmall";
import { BASE_URL, restaurantId } from "../services/restaurantService";
import {
  BookingDiv,
  DateDiv,
  GuestDiv,
  Input,
  Label,
  Search,
  Select,
  TimeDiv,
  Form,
  FormInput,
  FormButton,
} from "./styled/BookingFormStyle";
import Booking from "../pages/Booking";

export const BookingForm = () => {
  // const [admin, setAdmin] = useState(false);
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

  const handleSearch = () => {
    const selectedDate = new Date(`${date} ${time}`);
    const currDate = new Date();

    if (isBefore(selectedDate, currDate)) {
      Swal.fire("Du kan inte boka en tidpunkt som redan har passerat.");
      return;
    }

    const matchBookings = bookings.filter((booking: IBookingSmall) => {
      const bookingDate = new Date(`${booking.date} ${booking.time}`);
      return isAfter(bookingDate, currDate);
    });

    const totalBookings = matchBookings.length;
    console.log(matchBookings);

    if (totalBookings < TotalTables) {
      setShowBookingForm(true);
    } else {
      Swal.fire("Det finns tyvärr inga lediga bord på denna tidpunkt.");
    }
  };

  const thisDate = new Date();

  let day = thisDate.getDate();
  let month = thisDate.getMonth() + 1;
  let year = thisDate.getFullYear();
  let currDate = `${year}-${month}-${day}`;

  return (
    <BookingDiv>
      <DateDiv>
        <Label htmlFor="date">Datum:</Label>
        <Input
          type="date"
          id="date"
          value={date}
          min={currDate}
          required
          onChange={(e) => setDate(e.target.value)}
        />
      </DateDiv>

      <TimeDiv>
        <Label htmlFor="time">Tid:</Label>
        <Select
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="18:00">18:00</option>
          <option value="21:00">21:00</option>
        </Select>
      </TimeDiv>

      <GuestDiv>
        <Label htmlFor="numberOfGuests">Antal gäster:</Label>
        <Input
          type="number"
          id="numberOfGuest"
          min="1"
          max="6"
          required
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(Number(e.target.value))}
        />
      </GuestDiv>

      <Search onClick={handleSearch}>Sök</Search>
      {showBookingForm && (
        <Form onSubmit={handleSubmit}>
          <h2>
            Bokning för {date} kl {time}{" "}
          </h2>
          <label htmlFor="name">Name:</label>
          <FormInput
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="lastname">Efternamn:</label>
          <FormInput
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <label htmlFor="email">E-post:</label>
          <FormInput
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="phone">Telefonnummer:</label>
          <FormInput
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <FormButton type="submit">Skapa bokning</FormButton>
        </Form>
      )}
    </BookingDiv>
  );
};

export default BookingForm;
