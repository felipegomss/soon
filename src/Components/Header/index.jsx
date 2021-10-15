import { Container, Links, Button, MobileLinks, Nav, Linka } from "./styles";

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
        display: "flex",
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
        <h1>Lorem</h1>
        <Links>
          <Linka to="/">Home</Linka>
          <Linka to="/">Quem somos</Linka>
          <Linka to="/">Contato</Linka>
          <Linka to="/">Junte-se a nós</Linka>
        </Links>
        <Button onClick={showMenu}>
          <CgMenuCheese />
        </Button>
      </Container>
      <MobileLinks style={show}>
        <div>
          <Linka to="/">Home</Linka>
          <Linka to="/">Quem somos</Linka>
          <Linka to="/">Contato</Linka>
          <Linka to="/">Junte-se a nós</Linka>
        </div>
      </MobileLinks>
    </Nav>
  );
}

export default Header;
