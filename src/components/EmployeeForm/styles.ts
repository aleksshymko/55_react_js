import styled from "@emotion/styled";

export const EmployeeFormComponent = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 600px;
  gap: 10px;
  padding: 40px;
  background-color: white;
  border: 2px solid black;
  border-radius: 6px;
  /* cursor: pointer;
  &:hover {
    border: 4px solid green;
  } */
`;

export const Title = styled.div`
  align-self: center;
  //text-decoration: underline;
  font-size: 26px;
  font-weight: bold;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Checkbox = styled.input`
  width: 25px;
  height: 25px;
`;

export const CheckboxLabel = styled.label`
  font-size: 20px;
`;

export const ErrorMessage = styled.div`
  height: 20px;
  font-size: 18px;
  color: red;
`;
