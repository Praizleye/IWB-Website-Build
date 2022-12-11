// import framer from "framer-motion";
import styled from "styled-components";

export const StyleHero = styled.div`
  height: 90vh;
  background: #1b7aad;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  @media screen and (max-width: 1200px) {
    padding: 0 3rem;
  }
  z-index: -2;
  img.heroImg {
    height: 21rem;
    width: auto;
    margin-top: 3rem;
    align-self: end;
    z-index: 1;
    @media screen and (max-width: 1200px) {
      height: 19rem;
    }
  }
  img.illuminate {
    position: absolute;
    left: 57%;
    top: 1%;
    width: 25rem;
    /* z-index: -1; */

    /* //?Add a media query for extra large screens;*/

    @media screen and (max-width: 1200px) {
      left: 50%;
      width: 22rem;
      top: 1.3%;
    }
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
      @media screen and (max-width: 1200px) {
        font-size: 2.8rem;
      }
      @media screen and (max-width: 1050px) {
        font-size: 2.6rem;
      }
    }
    div:nth-of-type(2) {
      font-size: 2.8rem;
      font-weight: bold;
      @media screen and (max-width: 1200px) {
        font-size: 2.6rem;
      }
      @media screen and (max-width: 1200px) {
        font-size: 2.2rem;
      }
    }
    div:nth-of-type(4) {
      font-size: 1.125rem;
      margin-top: 1.7rem;
      @media screen and (max-width: 1200px) {
        font-size: 1rem;
      }
      @media screen and (max-width: 1050px) {
        font-size: 0.9rem;
        margin-top: 2.3rem;
      }
    }
    div:nth-of-type(3) {
      position: absolute;
      right: -5rem;
      top: 8rem;
      @media screen and (max-width: 1050px) {
        top: 7.5rem;
        right: -2rem;
      }
      svg {
        width: 18rem;
        height: auto;
        @media screen and (max-width: 1200px) {
          width: 15rem;
        }
        @media screen and (max-width: 1050px) {
          width: 12rem;
        }
      }
    }
    button {
      width: 18rem;
      height: 3rem;
      border: 2px solid #0047af;
      border-radius: 4px;
      margin-top: 2.8rem;
      background: #0047af;
      color: #fff;
      font-size: 1.2rem;
      cursor: pointer;
      transition: transform 0.5s ease-in-out;
      @media screen and (max-width: 1200px) {
        width: 16rem;
      }
      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;
