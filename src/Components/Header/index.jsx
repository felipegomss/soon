import {
  Container,
  Links,
  Button,
  MobileLinks,
  Nav,
  LinkNav,
  LinksNav,
  HaskLink,
} from "./styles";

import { CgMenuCheese } from "react-icons/cg";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState({
    display: "none",
  });

  const showMenu = () => {
    if (toggle === false) {
      setToggle(true);
      setShow({
        display: "grid",
      });
    } else {
      setShow({
        display: "none",
      });
      setToggle(false);
    }
    console.log(toggle);
  };
  return (
    <Nav>
      <Container>
        <a href="/">
          <h1>Lorem</h1>
        </a>
        <Links>
          <LinkNav to="/">Home</LinkNav>
          <HaskLink href="/#quem-somos">Quem somos</HaskLink>
          <LinkNav to="/contato">Contato</LinkNav>
          <LinkNav to="/junte-se">Junte-se a nós</LinkNav>
        </Links>
        <Button onClick={showMenu}>
          <CgMenuCheese />
        </Button>
      </Container>
      <MobileLinks style={show}>
        <LinksNav>
          <LinkNav to="/" onClick={showMenu}>
            Home
          </LinkNav>
          <HaskLink href="/#quem-somos" onClick={showMenu}>
            Quem somos
          </HaskLink>
          <LinkNav to="/contato" onClick={showMenu}>
            Contato
          </LinkNav>
          <LinkNav to="/junte-se" onClick={showMenu}>
            Junte-se a nós
          </LinkNav>
        </LinksNav>
        <div></div>
      </MobileLinks>
    </Nav>
  );
}

export default Header;
