import { ChangeEvent } from "react";
import { IBooking } from "./IBooking";

export interface IBookingContext {
    booking: IBooking;
    handleChange(event: ChangeEvent<HTMLInputElement>): void;
}