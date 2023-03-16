import React, { createContext, useState } from 'react';

interface IAdminContext {
	value: boolean;
	setValue: (value: boolean) => void;
}

export const AdminContext = createContext<IAdminContext>({
	value: false,
	setValue: () => {},
});

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [value, setValue] = useState<boolean>(false);

	return (
		<AdminContext.Provider value={{ value, setValue }}>
			{children}
		</AdminContext.Provider>
	);
};
