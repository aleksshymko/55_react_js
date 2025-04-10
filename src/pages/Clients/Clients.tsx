import { ClientsWrapper, Title, StyledLink } from "./styles"

function Clients() {
  return (
    <ClientsWrapper>
      <Title>Clients pages</Title>
      <StyledLink to='twitter'>Twitter</StyledLink>
      <StyledLink to='facebook'>Facebook</StyledLink>
      <StyledLink to='youtube'>Youtube</StyledLink>
    </ClientsWrapper>
  )
}

export default Clients
