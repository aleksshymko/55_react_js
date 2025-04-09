import { v4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";

import {
  LayoutComponent,
  Header,
  Nav,
  Main,
  Footer,
  LogoText,
  StyledNavLink,
  LogoImage,
  ButtonContainer,
} from "./styles";
import { LayoutProps, NavLinkObj } from "./types";
import { navLinksData } from "./data";
import Logo from "../../assets/avatar.jpg";
import Button from "../Button/Button";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const navLinks = navLinksData.map((navLink: NavLinkObj) => {
    return (
      <StyledNavLink
        key={v4()}
        to={navLink.to}
        style={({ isActive }) => ({
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        {navLink.linkName}
      </StyledNavLink>
    );
  });

  return (
    <LayoutComponent>
      <Header>
        <Link to="/">
          <LogoImage src={Logo} />
        </Link>
        <Nav>{navLinks}</Nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <ButtonContainer>
          <Button name="<-" onClick={goBack} />
        </ButtonContainer>
        <LogoText>Company name</LogoText>
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
