// import framer from "framer-motion";
import styled from "styled-components";

export const StyleHero = styled.div`
  height: 60vh;
  width: 100%;
  background: #075aa0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    height: 35rem;
    width: auto;
    margin-top: 8rem;
  }
  div.container {
    color: #fafafa;
    margin-top: 5rem;
    div:nth-of-type(1) {
      font-size: 64px;
      font-weight: bold;
      margin: 0.5rem auto;
    }
    div:nth-of-type(2) {
      font-size: 28px;
      opacity: 0.7;
      margin: 0.5rem auto;
    }
    button {
      width: 18rem;
      height: 3rem;
      border-radius: 40px;
      border: 2px solid #fff;
      margin: 0.8rem auto 0.8rem 16rem;
      background: #50b3fb;
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
export const OffsetCurve = styled.div`
  position: absolute;
  height: 28rem;
  width: 103%;
  left: -22px;
  background: #075aa0;
  top: 35vh;
  z-index: -10;
  border-radius: 80px;
  transform: rotateZ(5deg);
`;
