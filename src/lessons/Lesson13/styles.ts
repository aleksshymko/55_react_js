import styled from "@emotion/styled";

export const Lesson13Container = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  flex: 1;
  padding: 60px;
  background-color: #c59bfc;
  //gap: 10px;
  //zoom: 50%;
`;

export const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 500px;
  height: 700px;
  overflow-y: auto;
  //gap: 10px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 500px;
`;

export const Image = styled.img`
  width: 400px;
`;

export const Error = styled.div`
  color: red;
  font-size: 28px;
  font-weight: bold;
`;
