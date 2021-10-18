import {
  Container,
  Content,
  Icon,
  Text,
  Contact,
  Form,
  Input,
  Textarea,
  Chanels,
} from "./styles";

function Contato() {
  return (
    <>
      <Container>
        <Content>
          <Text>
            <h3>Entre em contato</h3>
            <p>
              Tem alguma duvida sobre nosso produto ou precisa de algum tipo de
              suporte? Mande-nos um email ou acesse algum de nossos canais de
              suporte.
            </p>
          </Text>
          <Icon>
            <img src="/assets/contact.png" alt="" />
          </Icon>
        </Content>
      </Container>
      <Contact>
        <Form action="">
          <h3>Fala com a gente!</h3>
          <Input
            type="text"
            name="nome"
            id=""
            placeholder="Qual seu nome?"
            required
          />
          <Input
            type="email"
            name="email"
            id=""
            placeholder="Fala aí seu E-mail!"
            required
          />
          <Input
            type="tel"
            name="tel"
            id=""
            placeholder="E seu Whatsapp? Fala aí"
            required
          />
          <Textarea
            name="texto"
            id=""
            rows="10"
            placeholder="O que você gostaria de falar para a gente?"
            required
          ></Textarea>
        </Form>
        <Chanels>
          <h3>Outros canais</h3>
          <ul>
            <li>
              <h4>Whatsapp</h4>
              <p>
                - Entre em contato com a gente diretamente no numero{" "}
                <a href="">(71) 9 9999-9999</a>
              </p>
            </li>
            <li>
              <h4>Linkedin</h4>
              <p>
                - Conecte-se com a gente em<a href=""> linkedin.com</a>
              </p>
            </li>
            <li>
              <h4>Instagram</h4>
              <p>
                - Siga-nos em<a href=""> instagram.com</a>
              </p>
            </li>
          </ul>
        </Chanels>
      </Contact>
    </>
  );
}

export default Contato;
