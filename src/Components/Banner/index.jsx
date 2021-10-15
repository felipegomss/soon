import { Container, Content, Wave, Icon } from "./styles";

function Banner() {
  return (
    <Container>
      <Content>
        <Icon>
          <h3>
            Aqui está a solução de <b>vendas para seu negócio!</b>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            culpa ipsa maiores dignissimos, ad, similique aspernatur quia
            dolorem neque saepe eligendi ullam tempore recusandae at praesentium
            distinctio quo laboriosam cumque.
          </p>
        </Icon>
        <Icon>
          <img src="/assets/banner_img.png" alt="" />
        </Icon>
      </Content>
      <Wave>
        <img src="/assets/banner.svg" alt="" />
      </Wave>
    </Container>
  );
}

export default Banner;
