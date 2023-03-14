import styled from "styled-components";

export const CalenderContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const BorderContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 450px;
height: 450px;
background-color: rgba(206, 211, 220, 0.8);
border-radius: 6px;
`;

export const BannerContainer = styled.div`
letter-spacing: 3px;
`;

export const DaysContainer = styled.div`
letter-spacing: 3px;
`;


export const DaysBorderBoxes = styled.th`
height: 50px;
padding: 5px;
text-align: center;
`;


export const DateBorderBox = styled.td`
width: 45px;
height: 45px;
background-color: rgba(231, 13, 82, 0.4);
border-radius: 6px;
padding: 2px;
text-align: center;
cursor: pointer;
transition: .5s all;

&:hover{
    background-color: #CED3DC;
    box-shadow: 0 0 3px 0;
}
`;

export const TableBody = styled.tbody`
margin-top: 20px;
`;