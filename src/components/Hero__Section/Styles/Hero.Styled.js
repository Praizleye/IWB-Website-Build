// import framer from "framer-motion";
import styled from "styled-components";

export const StyleHero = styled.section`
  height: max-content;
  background: #1b7aad;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 5rem 4rem;
  z-index: -2;
  @media screen and (min-width: 1500px){
    padding-inline: calc((100% - 1300px) / 2);
  }
  @media screen and (max-width: 1200px) {
    padding: 4rem 3rem 4rem;
  }

  @media screen and (max-width: 850px) {
    padding: 4rem 2rem 4rem;
  }
  @media screen and (max-width: 590px) {
    padding: 4rem 1rem 4rem;
  }

  img.heroImg {
    height: 21rem;
    width: auto;
    margin-top: 6rem;
    align-self: end;
    z-index: 1;
    @media screen and (max-width: 1125px) {
      height: 19rem;
    }
    @media screen and (max-width: 970px) {
      height: 17rem;
    }
    @media screen and (max-width: 900px) {
      height: 16rem;
    }
    @media screen and (max-width: 768px) {
      height: 14rem;
    }
    @media screen and (max-width: 590px) {
      display: none;
    }
  }
  img.illuminate {
    position: absolute;
    left: 61%;
    top: 0.5%;
    width: 25rem;
    /* z-index: -1; */

    /* //?Add a media query for extra large screens;*/

    @media screen and (max-width: 1121px) {
      left: 58%;
      top: 0.7%;
      width: 21rem;
      /* top: %; */
    }
    @media screen and (max-width: 940px) {
      width: 17rem;
      left: 58%;
      top: 0.8%;
    }
    @media screen and (max-width: 850px) {
      width: 15rem;
      left: 54%;
      top: 0.9%;
    }
    @media screen and (max-width: 768px) {
      width: 13rem;
      left: 55%;
      top: 1.2%;
    }
    @media screen and (max-width: 590px) {
      display: none;
    }
  }

  div.container {
    color: #fafafa;
    margin-top: 5rem;
    width: 50%;
    /* height: 100%; */
    /* background: yellow; */
    position: relative;
    @media screen and (max-width: 1121px) {
      width: 50%;
    }
    @media screen and (max-width: 850px) {
      width: 55%;
    }
    @media screen and (max-width: 590px) {
      width: 100%;
    }
    div:nth-of-type(1) {
      font-size: 3.5rem;
      font-weight: bold;
      width: max-content;
      font-family:"Host Grotesk";
      @media screen and (max-width: 1086px) {
        font-size: 2.9rem;
      }
      @media screen and (max-width: 970px) {
        font-size: 2.7rem;
      }

      @media screen and (max-width: 850px) {
        font-size: 2.2rem;
      }
      @media screen and (max-width: 768px) {
        font-size: 2rem;
      }
      @media screen and (max-width: 590px) {
        font-size: 3.5rem;
      }
      @media screen and (max-width: 540px) {
        font-size: 3rem;
      }
      @media screen and (max-width: 490px) {
        font-size: 2.5rem;
      }
      @media screen and (max-width: 390px) {
        font-size: 2rem;
      }
    }
    div:nth-of-type(2) {
      font-size: 3.5rem;
      font-family:"Host Grotesk";
      font-weight: bold;
      width: max-content;
      @media screen and (max-width: 1086px) {
        font-size: 2.9rem;
      }
      @media screen and (max-width: 970px) {
        font-size: 2.7rem;
      }

      @media screen and (max-width: 850px) {
        font-size: 2.2rem;
      }
      @media screen and (max-width: 768px) {
        font-size: 2rem;
      }
      @media screen and (max-width: 650px) {
        font-size: 1.7rem;
      }
      @media screen and (max-width: 590px) {
        font-size: 3.5rem;
      }
      @media screen and (max-width: 540px) {
        font-size: 3rem;
      }
      @media screen and (max-width: 490px) {
        font-size: 2.5rem;
      }
      @media screen and (max-width: 390px) {
        font-size: 2rem;
      }
    }
    div:nth-of-type(4) {
      font-size: 1.125rem;
      margin: 2rem 2rem 0 0;
      @media screen and (max-width: 1086px) {
        font-size: 1rem;
      }
      @media screen and (max-width: 1000px) {
        margin-top: 2.7rem;
      }
      @media screen and (max-width: 850px) {
        padding-right: 1rem;
        margin-top: 1.5rem;
      }
      @media screen and (max-width: 768px) {
        padding-right: 0.2rem;
        margin-top: 1.5rem;
      }
      @media screen and (max-width: 590px) {
        font-size: 1rem;
        margin-top: 2rem;
        padding-right: 0;
      }
    }
    div:nth-of-type(3) {
      position: absolute;
      right: -0.5rem;
      top: 9.5rem;
      @media screen and (max-width: 1121px) {
        top: 10rem;
        /* right: -2rem; */
      }
      @media screen and (max-width: 1086px) {
        top: 8.1rem;
      }
      @media screen and (max-width: 850px) {
        top: 6.2rem;
        right: 1.5rem;
      }
      @media screen and (max-width: 768px) {
        top: 5.5rem;
      }
      @media screen and (max-width: 650px) {
        top: 5rem;
      }
      @media screen and (max-width: 590px) {
        top: 10rem;
      }
      @media screen and (max-width: 540px) {
        top: 8rem;
      }
      @media screen and (max-width: 390px) {
        top: 6rem;
      }
      svg {
        width: 18rem;
        height: auto;
        @media screen and (max-width: 1086px) {
          width: 15rem;
        }
        @media screen and (max-width: 850px) {
          width: 13rem;
        }
        @media screen and (max-width: 650px) {
          width: 10rem;
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
      @media screen and (max-width: 650px) {
        width: 10rem;
        height: 2.6rem;
        font-size: 1rem;
        margin-top: 1.9rem;
      }
      @media screen and (max-width: 590px) {
        width: 14rem;
        height: 2.6rem;
        font-size: 1rem;
        margin-top: 1.9rem;
      }
      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;
