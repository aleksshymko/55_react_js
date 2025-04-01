import styled from "@emotion/styled";

interface ProfileCardStyledProps {
  vip?: boolean;
}

export const Homework09Container = styled.div`
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex: 1;
  padding: 600px;
  background-color: rgb(188, 219, 219);
`;

export const ProfileCard = styled.div<ProfileCardStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: ${({ vip }) => (vip ? "650px" : "600px")};
  height: ${({ vip }) => (vip ? "550px" : "500px")};
  font-size: 20px;
  color: white;
  background-color: ${({ vip }) => (vip ? "rgb(25, 23, 96)" : "rgb(67, 65, 134)")};
  border-radius: 6px;
  //box-shadow: 0 4px 10px;
`;

export const Title = styled.h2 `
 font-size: 40px;
 `
export const Description = styled.div ``