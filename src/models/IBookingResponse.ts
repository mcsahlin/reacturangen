export interface IBookingResponse {
	id: string;
	restaurantId: string;
	date: string;
	time: string;
	numberOfGuest: number;
	customerId: string;
}

export interface IBookingResponseError {
	message: string;
	internal_code: string;
}
