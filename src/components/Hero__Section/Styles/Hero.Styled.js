// import framer from "framer-motion";
import styled from "styled-components";

export const StyleHero = styled.div`
  height: 90vh;
  background: #1b7aad;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  z-index: -2;
  img.heroImg {
    height: 21rem;
    width: auto;
    margin-top: 3rem;
    align-self: end;
    z-index: 1;
  }
  img.illuminate {
    position: absolute;
    left: 57%;
    top: 4rem;
    width: 25rem;
    /* z-index: -1; */

    //?Add a media query for when the height is greater than 750px;
  }
  img.heroImg {
    height: 23rem;
    width: auto;
    margin-top: 2rem;
  }
  div.container {
    color: #fafafa;
    margin-top: 5rem;
    width: 40%;
    position: relative;
    div:nth-of-type(1) {
      font-size: 3rem;
      font-weight: bold;
    }
    div:nth-of-type(2) {
      font-size: 2.8rem;
      font-weight: bold;
    }
    div:nth-of-type(4) {
      font-size: 1.125rem;
      margin-top: 1.7rem;
    }
    div:nth-of-type(3) {
      position: absolute;
      right: -5rem;
      top: 8rem;
      svg {
        width: 18rem;
        height: auto;
      }
    }
    button {
      width: 18rem;
      height: 3rem;
      border: 2px solid #0047af;
      margin-top: 2.8rem;
      background: #0047af;
      color: #fff;
      font-size: 1.2rem;
      cursor: pointer;
      transition: transform 0.5s ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;
