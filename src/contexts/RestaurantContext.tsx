import { createContext } from 'react';
interface IRestaurantContext {
	restaurantId: string;
	isActive: boolean;
	setRestaurantId: (id: string) => void;
	setIsActive: (isActive: boolean) => void;
}
export const defaultRestaurantContextValue: IRestaurantContext = {
	restaurantId: '64121c14072ea76784085cba',
	isActive: true,
	setRestaurantId: () => {},
	setIsActive: () => {},
};
export const RestaurantContext = createContext(defaultRestaurantContextValue);
