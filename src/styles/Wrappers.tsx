import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;

    @media (min-width: 700px) {
        
    }
`;

export const VideoWrapper = styled.video`
    height: 100%;
    width: 100%;
`

export const InfoWrapper = styled(Wrapper)`
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        flex-direction: row;
        justify-content: space-evenly;
        height: 90vh;
    }
`

export const TextWrapper = styled.p`
    height: 40vh;
    width: 30vh;
    padding: 40px;
    border: 1px solid black;
    border-radius: 20px;

    @media (min-width: 700px) {
        height: 50vh;
    }
`;

export const ImageInfoWrapper = styled.img`
    height: 45vh;
    width: 35vh;

    @media (min-width: 700px) {
        height: 55vh;
        width: 45vh;
    }
`
    
export const HourWrapper = styled(Wrapper)`

`

export const ImageSecondWrapper = styled.img`
    height: 100%;
    width: 100%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

`;