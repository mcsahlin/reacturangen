import styled from "styled-components";

export const CalendarContainer = styled.div`
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
background-color: #2C2F33;
border-radius: 6px;
`;


export const BannerContainer = styled.div`
letter-spacing: 3px;
border-bottom: 1px solid #CED3DC;
color: white;
`;

export const DaysContainer = styled.div`
letter-spacing: 3px;

`;


export const DaysBorderBoxes = styled.th`
height: 50px;
padding: 5px;
text-align: center;
color: white;
`;


export const DateBorderBox = styled.td`
width: 45px;
height: 45px;
background-color: #CED3DC;
border-radius: 6px;
padding: 2px;
text-align: center;
cursor: pointer;
transition: .5s all;

&:hover{
    background-color: #2C2F33;
    box-shadow: 0 3px 6px 0;
}
`;

export const TableBody = styled.tbody`
margin-top: 20px;
`;