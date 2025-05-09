import styled from "@emotion/styled";

interface InputComponentStyledProps {
  isSearch?: boolean;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

export const InputComponent = styled.input<InputComponentStyledProps>`
  width: 100%;
  height: 50px;
  padding: 12px;
  outline: none;
  /* margin-top: 10px; */
  /* margin: 10px auto; */
  border: 1px solid black;
  border-radius: ${({ isSearch }) => (isSearch ? "16px" : "4px")};
  font-size: 18px;
  /* display: flex; */
  /* background-color: #f4f4f4; */
`;

export const Label = styled.label`
  font-size: 20px;
`;

export const ErrorMessage = styled.div`
  height: 20px;
  font-size: 18px;
  color: red;
`;
