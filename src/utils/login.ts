export const login = async () => {
	return {
		username: 'admin',
		password: 'admin',
	};
};

export const logout = async () => {
	return {
		username: '',
		password: '',
	};
};
