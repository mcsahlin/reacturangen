import styled from 'styled-components';

interface IColors {
	black: string;
	whhite: string;
}

interface IHeadingProps {
	color: string;
	thin: boolean;
}

export const Heading = styled.h2<IHeadingProps>`
	font-family: Montserrat, sans-serif;
	font-weight: ${(props) => (props.thin ? 100 : 500)};
	color: ${(props) => props.color};
`;
