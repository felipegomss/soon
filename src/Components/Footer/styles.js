import styled from "styled-components";

export const Container = styled.div`
  background: #000;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 3em 3em 1em 3em;
  display: grid;
  place-items: start;
  grid-template-rows: 20fr 1fr;
  color: #fff;

  p {
    font-size: 0.7em;
  }

  @media (min-width: 760px) {
    grid-template-rows: 10fr 1fr;
  }
`;

export const FooterLinks = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 2em;
  @media (min-width: 760px) {
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

export const Colunms = styled.div`
  h3 {
    padding-bottom: 1em;
  }

  h3::after {
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    width: 50px;
    height: 2px;
    display: flex;

    background-image: linear-gradient(
      to right,
      #281ac8,
      #9207b8,
      #c624a9,
      #e74c9e,
      #fd749b
    );
  }
  @media (min-width: 760px) {
  }
`;
