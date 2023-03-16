import React, { createContext, useState } from 'react';
export interface IAdminContext {
	value: boolean;
	setValue: (value: boolean) => void;
}
export const adminTheme = {};
export const AdminContext = createContext<IAdminContext>({
	value: false,
	setValue: () => {},
});
export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [value, setValue] = useState(false);

	return (
		<AdminContext.Provider value={{ value, setValue }}>
			{children}
		</AdminContext.Provider>
	);
};
