import styled from "@emotion/styled";

interface ClientsCardStyledProps {
  priority?: boolean;
}

export const StyledHomework09 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex: 1;
  padding: 40px;
  background: cadetblue;
`;

export const ClientsCard = styled.div<ClientsCardStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: ${({ priority }) => (priority ? "350px" : "300px")};
  height: ${({ priority }) => (priority ? "350px" : "300px")};
  font-size: 24px;
  background-color: ${({ priority }) => (priority ? "blue" : "darkblue")};
  border-radius: 10px;
  box-shadow: 0 4px 10px;
`;
