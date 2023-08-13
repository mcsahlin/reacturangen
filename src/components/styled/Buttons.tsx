import styled from "styled-components";

export const GuestCountBtn = styled.button.attrs({})`
  box-sizing: border-box;
  margin-bottom: 30px;
  width: 20%;
  text-align: center;
  background-color: #ced3dc;
  color: #2c2f33;
  padding: 5px;

  border: 2px solid #e70d52;
  border-radius: 50%;
  transition: all 0.2s;
  :enabled {
    background-color: transparent;
    color: #2c2f33;
  }
  :nth-of-type(2) {
    border-color: green;
    :hover {
      background-color: green;
    }
  }
  :hover {
    background-color: #e70d52;
    color: white;
    transition: all 0.2s;
    border: 2px solid white;
    border-radius: 0.4rem;
  }
`;
