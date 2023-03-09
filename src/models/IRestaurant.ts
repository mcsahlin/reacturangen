export interface IRestaurant {
	name: string;
	address: IAddress;
}

export interface IAddress {
	street: string;
	zip: string;
	city: string;
}

const reacturangen: IRestaurant; // api
