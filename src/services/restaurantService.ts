import axios from "axios";
import { IBooking } from "../models/IBooking";

const BASE_URL = "https://school-restaurant-api.azurewebsites.net/";

export const callApi = async(): Promise <IBooking[]> => {
    let response = await axios.get<IBooking[]>(
        BASE_URL
    );

    return response.data
}