import axios from "axios";
import { IBooking } from "../models/IBooking";

export const callApi = async(): Promise <IBooking[]> => {
    let response = await axios.get<IBooking[]>(
        "https://school-restaurant-api.azurewebsites.net/"
    );

    return response.data
}