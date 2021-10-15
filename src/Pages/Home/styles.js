import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 760px) {
  }
`;

export const Welcome = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  place-items: center;
  padding: 0 1em;
  @media (min-width: 760px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr;
    margin-top: 10em;
  }
`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
  @media (min-width: 760px) {
  }
`;

export const About = styled.div`
  background-image: url("/assets/wave.svg");
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  place-items: center;
  padding: 5em 0;
  @media (min-width: 760px) {
  }
`;

export const Card = styled.div`
  width: 80%;
  background-color: #e3e3e3;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: grid;
    grid-gap: 10px;
    place-items: center;
  }
  h3 {
    font-size: 2em;
    padding-bottom: 0.5em;
    width: fit-content;
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
      to top,
      #281ac8,
      #9207b8,
      #c624a9,
      #e74c9e,
      #fd749b
    );
  }
  @media (min-width: 760px) {
    div {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export const Img = styled.span`
  width: 90%;
  position: relative;
  color: #fff;
  a {
    color: #fff;
  }
  img {
    width: 100%;
  }

  span {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    visibility: visible;
    opacity: 0.6;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    padding: 1em;
  }

  h4 {
    margin: 0;
  }

  @media (min-width: 760px) {
    width: 100%;

    &:hover span {
      visibility: visible;
      opacity: 0.6;
    }

    &:hover h4 {
      transform: translateY(0);
    }

    h4 {
      transition: 0.2s;
      transform: translateY(1em);
      margin: 0;
    }

    span {
      background-image: linear-gradient(
        to top,
        #281ac8,
        #9207b8,
        #c624a9,
        #e74c9e,
        #fd749b
      );
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.2s, visibility 0.2s;
      padding: 0;
      justify-content: center;
    }
  }
`;
