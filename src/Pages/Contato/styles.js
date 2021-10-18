import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  position: relative;
  height: 80vh;
  @media (min-width: 760px) {
    height: 40vh;
  }
`;

export const Content = styled.div`
  padding: 3em 1em;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #281ac8, #fd749b);
  position: fixed;
  z-index: -10;
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

export const Contact = styled.div`
  background-image: url("/assets/white-wave.svg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 760px) {
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 13em 0 2em 0;
  width: 90%;
  h3 {
    margin: 1em;
    width: fit-content;
  }
  h3::after {
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    width: 45%;
    height: 2px;
    display: flex;
    margin-bottom: 0.5em;
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
    width: 60%;
  }
`;

export const Input = styled.input`
  margin-bottom: 1em;
  padding: 0.7em;
  border: 1px solid #0d0d0d;

  &:focus {
    border-image: linear-gradient(
        to top,
        #281ac8,
        #9207b8,
        #c624a9,
        #e74c9e,
        #fd749b
      )
      1;
  }
  @media (min-width: 760px) {
  }
`;

export const Textarea = styled.textarea`
  resize: none;

  border: 1px solid;
  border: 1px solid #0d0d0d;
  &:focus {
    border-image: linear-gradient(
        to top,
        #281ac8,
        #9207b8,
        #c624a9,
        #e74c9e,
        #fd749b
      )
      1;
  }

  @media (min-width: 760px) {
  }
`;

export const Chanels = styled.div`
  width: 90%;
  margin: auto;
  padding-bottom: 3em;
  h3 {
    margin: 1em;
    width: fit-content;
  }
  h3::after {
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    width: 45%;
    height: 2px;
    display: flex;
    margin-bottom: 0.5em;
    background-image: linear-gradient(
      to right,
      #281ac8,
      #9207b8,
      #c624a9,
      #e74c9e,
      #fd749b
    );
  }
  h4 {
    margin: 0.5em 0;
    background: -webkit-linear-gradient(right, #281ac8, #fd749b);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    a {
      color: #0d0d0d;

      &:hover {
        color: #9207b8;
      }
    }
  }
  @media (min-width: 760px) {
    width: 60%;
  }
`;
