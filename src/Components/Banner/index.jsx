import { Container, Content, Wave, Icon, Text } from "./styles";

function Banner() {
  return (
    <Container>
      <Content>
        <Text>
          <h3>
            Aqui está a solução de <b>vendas para seu negócio!</b>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            culpa ipsa maiores dignissimos, ad, similique aspernatur quia
            dolorem neque saepe eligendi ullam tempore recusandae at praesentium
            distinctio quo laboriosam cumque.
          </p>
        </Text>
        <Icon>
          <img src="/assets/banner.png" alt="" />
        </Icon>
      </Content>
      <Wave>
        <img src="/assets/banner.svg" alt="" />
      </Wave>
    </Container>
  );
}

export default Banner;
