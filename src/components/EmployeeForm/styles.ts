import styled from "@emotion/styled";

export const EmployeeFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  gap: 20px;
  padding: 20px;
  background-color: whitesmoke;
  border: 4px solid saddlebrown;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    border: 4px solid green;
  }
`;

export const Title = styled.h2`
  align-self: center;
  text-decoration: underline;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Message = styled.p`
  color: red;
`;
