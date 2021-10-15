import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  position: relative;
`;

export const Content = styled.div`
  padding: 3em 1em;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #281ac8, #fd749b);
  h3 {
    font-weight: lighter;
    font-size: 2em;
  }
  p {
    width: fit-content;
  }
  @media (min-width: 760px) {
    place-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
export const Wave = styled.div`
  @media (min-width: 760px) {
    z-index: -1;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    transform: translateY(23vw);
  }
`;
export const Icon = styled.div`
  width: 100%;
  img {
    width: 100%;
  }

  @media (min-width: 760px) {
    width: 50%;
  }
`;

export const Text = styled.div`
  width: 100%;

  @media (min-width: 760px) {
    width: 90%;
    padding-left: 5em;
  }
`;
