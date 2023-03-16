import styled from 'styled-components';

interface IGuestCountSelectorProps {
	value: number;
	placeholder?: string;
}

//* Guest count selector takes number as props (1-6)
export const GuestCountRadio = styled.input.attrs(
	(props: IGuestCountSelectorProps) => ({
		type: 'radio',
		name: 'guestCount',
		value: props.value || null,
	})
)`
	// style
`;
