import { NavLink } from "react-router-dom";

import { LayoutComponent, Header, Nav, Main, Footer, LogoText } from "./styles";
import { LayoutProps } from "./types";

function Layout({children}:LayoutProps) {
  return (
    <LayoutComponent>
      <Header>
        <LogoText>Company name</LogoText>
        <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </Nav>
      </Header>
      <Main >
        {children}
      </Main>
      <Footer>
        <LogoText>Company name</LogoText>
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
