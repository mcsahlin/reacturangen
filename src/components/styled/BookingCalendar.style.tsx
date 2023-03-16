import styled from "styled-components";

export const CalendarContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const SeclectGuests = styled.select`
margin-bottom: 30px;
width: 20%;
text-align: center;
background-color: #CED3DC;
color: black;
border-radius: 3px;
padding: 5px;

&:hover{
    background-color: #2C2F33;
    color: white;
}
`;

export const Options = styled.option`
margin: 5px;
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

export const ButtonBooking = styled.button`
padding: 15px;
margin-left: 40%;
margin-top: 30px;
border-radius: 3px;
border: 1px solid #E70D52;
color: #E70D52;
letter-spacing: 0px;
transition: all 0.4s;
cursor: pointer;

&:hover {
    color: white;
    background-color: #E70D52;
}

&:active {
letter-spacing: 2px;
}



@media (min-width: 700px) {
		width: 20%;
	}
`;