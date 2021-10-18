import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-between;

  h1 {
    background: -webkit-linear-gradient(right, #281ac8, #fd749b);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const Nav = styled.div`
  position: fixed;
  z-index: 10000;
  width: 100%;
  background-color: #fff;
  @media (min-width: 960px) {
  }
`;
export const Links = styled.div`
  justify-content: center;
  align-items: center;
  display: none;
  @media (min-width: 960px) {
    display: flex;
  }
`;
export const LinkNav = styled(NavLink)`
  &::after {
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    display: flex;
    width: 100%;
    background-image: transparent;
  }
  color: #0d0d0d;
  padding: 0 1em;

  &:hover {
    &::after {
      content: "";
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      display: flex;
      animation: grow 0.7s ease;
      background-image: linear-gradient(
        to right,
        #281ac8,
        #9207b8,
        #c624a9,
        #e74c9e,
        #fd749b
      );

      @keyframes grow {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }
    }
  }

  @media (min-width: 960px) {
  }
`;
export const HaskLink = styled.a`
  &::after {
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    display: flex;
    width: 100%;
    background-image: transparent;
  }
  color: #0d0d0d;
  padding: 0 1em;

  &:hover {
    &::after {
      content: "";
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      display: flex;
      animation: grow 0.7s ease;
      background-image: linear-gradient(
        to right,
        #281ac8,
        #9207b8,
        #c624a9,
        #e74c9e,
        #fd749b
      );

      @keyframes grow {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }
    }
  }

  @media (min-width: 960px) {
  }
`;
export const MobileLinks = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr;
  div {
    background-image: url("/assets/footer-svg.svg");
    background-position: bottom;
    background-size: cover;
    height: 60vh;
  }
  a {
    color: #0d0d0d;
    padding: 0 1em;
  }
  @media (min-width: 960px) {
    display: none;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 2em;
  @media (min-width: 960px) {
    display: none;
  }
`;

export const LinksNav = styled.nav`
  margin-top: 2em;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
