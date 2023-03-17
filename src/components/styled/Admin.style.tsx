import styled from 'styled-components';

export const AdminContainer = styled.div`
width: 100%;
height: 100vh;
margin-top: 10%;
text-align: center;
`;

export const AdminTable = styled.table`
display: table;
margin-top: 10%;
margin-left: 5%;
transform: translateX(50%, 50%);
/* table-layout: fixed; */
border-collapse: collapse;
flex-wrap: wrap;
word-break: break-all;
width: 90%;
border-spacing: 0px;
`;
export const AdminThead = styled.thead`
border: 1px solid black;
text-align: left;
`;

export const AdminTr = styled.tr`

`;

export const ThId = styled.th`
border: 1px solid black;
padding: 12px;
`;

export const NameTh = styled.th`
border: 1px solid black;
padding: 16px;
`;

export const LastNameTh = styled.th`
border: 1px solid black;
padding: 16px;
`;

export const DateTh = styled.th`
border: 1px solid black;
padding: 16px;
`;

export const TimeTh = styled.th`
border: 1px solid black;
padding: 16px;
`;

export const GuestsTh = styled.th`
border: 1px solid black;
padding: 16px;
`;

export const AdimnBody = styled.tbody`

`;

export const BodyTr = styled.tr`
padding: 16px;
`;

export const BodyTd = styled.td`
border: 1px solid black;
word-break: break-all;
padding: 16px;
`;

export const DeleteIcon = styled.span`
cursor: pointer;
font-size: 25px;
`;
