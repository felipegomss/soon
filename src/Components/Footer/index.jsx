import { Container, Content, FooterLinks, Colunms } from "./styles";

function Footer() {
  return (
    <Container>
      <Content>
        <FooterLinks>
          <Colunms>
            <h3>Lorem</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              illo aspernatur velit unde iste corporis repudiandae sequi
              deserunt consequatur neque vitae, sapiente labore in atque.
              Aspernatur iure expedita quas voluptate.
            </p>
          </Colunms>
          <Colunms>
            <h3>Lorem Links</h3>
            <a href="">
              <h4>Home</h4>
            </a>
            <a href="">
              <h4>Quem somos</h4>
            </a>
            <a href="">
              <h4>Contato</h4>
            </a>
            <a href="">
              <h4>Junte-se a nós</h4>
            </a>
          </Colunms>
          <Colunms>
            <h3>Contatos</h3>
            <a href="">
              <h4>(71) 9 9999-9999</h4>
            </a>
            <a href="">
              <h4>salvefamilia@lorem.com</h4>
            </a>
            <a href="">
              <h4>Salavdor-BA</h4>
            </a>
          </Colunms>{" "}
        </FooterLinks>
        <p>
          Developed by <b>Lorem © 2021 All rights reserved</b>
        </p>
      </Content>
    </Container>
  );
}

export default Footer;
