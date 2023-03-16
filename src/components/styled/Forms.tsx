import styled from 'styled-components';

export const FormWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-image: linear-gradient(
      to right bottom,
	  #2c2f33,
      #131313
    );
`;

export const Form = styled.form`
	width: 50%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 100px;

`;

export const LabelDiv = styled.div`
width: 100px;
`;

export const DualInputWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const DualInputWrapperSecond = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;

`;

export const StyledLabel = styled.label`
max-width: 100%;
font-size: 1rem;
font-weight: 700;
display: flex;
justify-content: center;
margin: 10px 10px 10px 5px;
color: whitesmoke;
transition: all 0.3s;

&:placeholder {
      color: $color-gray;
    }
`;

