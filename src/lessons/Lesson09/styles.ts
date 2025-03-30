import styled from "@emotion/styled";

interface BoxInfoStyledProps {
  primary?: boolean;
}

export const BoxInfo = styled.div<BoxInfoStyledProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ primary }) => (primary ? "center" : "flex-end")};
  padding: 20px;
  width: 300px;
  height: 300px;
  font-size: 24px;
  /* background-color: rebeccapurple; */
  background-color: ${({ primary }) => (primary ? "rebeccapurple" : "grey")};
`;

export const TitleCard = styled.h2`
  color: #d5cbe8;
  font-size: 30px;
`;

export const AvatarImg = styled.img`
  width: 100px;
`;
