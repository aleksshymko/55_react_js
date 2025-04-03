import styled from "@emotion/styled";
import backImage from '../../assets/bg_image.jpg'

export const Homework12Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: gainsboro;
  background-image: url(${backImage});
  background-position: center;
  background-size: cover;
  gap: 20px;
  padding: 20px;
`;

export const FieldForFact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
  font-size: 24px;
  border-radius: 5px;
  background-color: powderblue;
  padding: 10px;
  width: 800px;
  height: 300px;
`;

export const FieldForError = styled.div`
color: firebrick;
font-weight: bolder;
font-size: 30px;
min-height: 40px;
`;
