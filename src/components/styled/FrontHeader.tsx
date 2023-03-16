import styled from "styled-components";

export const H1 = styled.h1`
    display: flex;
    position: absolute;
    color: whitesmoke;
    backface-visibility: hidden;
    letter-spacing: .5rem;

    animation: moveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-in;

    @keyframes moveInLeft {
        0% {
            opacity: 0;
            transform: translateY(-10rem);
        }
        80% {
            transform: translateY(1rem);
        }
        100% {
            opacity: 1;
            transform: translate(0);
        }
    }
`;

export const H2 = styled.h2`
    display: flex;
    position: relative;
`
