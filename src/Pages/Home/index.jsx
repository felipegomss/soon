import Banner from "../../Components/Banner";
import { Container, Welcome, Content, About, Card, Img } from "./styles";

function Home() {
  return (
    <Container>
      <Banner />
      <Welcome>
        <Content>
          <img src="/assets/welcome_img.png" alt="" />
        </Content>
        <Content>
          <h1>Bem vindo ao Lorem!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quis, a, fuga molestias, quae quasi eius veritatis hic earum placeat
            delectus. Aspernatur odit aut ipsam, dignissimos vero placeat
            voluptates doloremque, dolore culpa laborum praesentium voluptas, a
            rem quis molestiae eligendi. In unde temporibus soluta molestias,
            minima consectetur eligendi cum molestiae numquam totam! Harum esse
            asperiores numquam quam animi, amet officiis natus odit, laudantium
            eum, at dignissimos minus. Adipisci autem assumenda fugit fuga quos
            aperiam earum asperiores eaque neque laboriosam corporis, tempore,
            velit repellendus quae! Et, animi cupiditate. Non asperiores
            corporis quo quasi ea animi ut commodi? Cumque amet rem a.
          </p>
        </Content>
      </Welcome>
      <About id="quem-somos">
        <Card>
          <h3>Nossa Equipe</h3>
          <div>
            <Img>
              <img src="/assets/felip.jpg" alt="" />
              <span>
                <a
                  href="https://www.instagram.com/felipegomss/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>@felipegomss</h4>
                </a>
                <p>Desenvolvedor Full Stack</p>
              </span>
            </Img>
            <Img>
              <img src="/assets/jotaguiga.jpg" alt="" />
              <span>
                <a
                  href="https://www.instagram.com/jotaguiga/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>@jotaguiga</h4>
                </a>

                <p>Desenvolvedor Python</p>
              </span>
            </Img>
            <Img>
              <img src="/assets/gui.jpg" alt="" />
              <span>
                <a
                  href="https://www.instagram.com/gottlich.art/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>@gottlich.art</h4>
                </a>

                <p>Art Designer | Marketing</p>
              </span>
            </Img>
          </div>
        </Card>
      </About>
    </Container>
  );
}

export default Home;
