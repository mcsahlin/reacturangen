export interface IBooking {
  _id: string;
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuest: number;
  customerId: string;
}
