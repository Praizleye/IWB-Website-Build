import styled from "styled-components";

export const StylePopup = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  @media screen and (max-width: 320px) {
    display: none;
  }
  div.close {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1.8rem;
    right: 0;
    z-index: 11;
    color: white;
    cursor: pointer;

    svg {
      width: 2rem;
      height: auto;
      /* background: white; */
      color: white;
    }
  }
  div.Ourprograms.container.cards {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    position: relative;

    div.card {
      width: 28rem;
      height: 32rem;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      background: #0047af;
      @media screen and (max-width: 530px) {
        width: 24rem;
        height: 34rem;
      }
      @media screen and (max-width: 460px) {
        width: 22rem;
      }
      @media screen and (max-width: 380px) {
        width: 20rem;
      }
      @media screen and (max-width: 360px) {
        width: 19rem;
        height: 32rem;
      }
      div.card-img {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 24rem;
          padding: 1.5rem 1rem 1rem;
          margin-top: 1rem;
          height: 14rem;
          object-fit: cover;
          object-position: 50% 50%;
          @media screen and (max-width: 530px) {
            width: 22rem;
            margin-top: 1.5rem;
          }
          @media screen and (max-width: 460px) {
            width: 20rem;
          }
          @media screen and (max-width: 380px) {
            width: 19rem;
          }
        }
      }
      div.card-subHeading {
        padding: 0 1rem;
        font-size: 1.3rem;
        font-weight: 600;
        color: #fff;
        text-align: center;
        letter-spacing: 0.09rem;
        word-spacing: 0.09rem;
        @media screen and (max-width: 530px) {
          /* height: 3rem; */
          font-size: 1.1rem;
        }

        span {
          position: relative;
          img {
            position: absolute;
            height: 2.5rem;
            width: auto;
            left: 0;
            @media screen and (max-width: 360px) {
              height: 2.2rem;
              left: -5px;
              top: -5px;
            }
          }
        }
      }
      div.card-textDesc {
        padding: 0.5rem 2rem 0;
        font-size: 1rem;
        height: 9rem;
        text-align: center;
        color: #fff;
        font-weight: 100;
        @media screen and (max-width: 530px) {
          /* height: rem; */
          font-size: 0.9rem;
          margin-top: 1rem;
        }
        @media screen and (max-width: 360px) {
          /* height: rem; */
          font-size: 0.8rem;
          margin-top: 0.25rem;
        }
      }
      button {
        margin: 1rem;
        margin-left: 3rem;
        width: 22rem;
        height: 3rem;
        background: #ffe401;
        border: none;
        color: #000;
        font-size: 1.3rem;
        cursor: pointer;
        border-radius: 4px;
        @media screen and (max-width: 530px) {
          margin-left: 2.5rem;
          width: 19rem;
        }
        @media screen and (max-width: 460px) {
          margin-left: 2.5rem;
          width: 17rem;
          height: 2.5rem;
          font-size: 1.1rem;
        }
        @media screen and (max-width: 380px) {
          width: 16rem;
          margin-left: 2rem;
        }
        @media screen and (max-width: 360px) {
          height: 2rem;
          font-size: 1rem;
        }
      }
    }
    div.card2 {
      background: #1e1e1e;
      div.card-subHeading {
        span {
          img {
            height: 1.5rem;
          }
        }
      }
    }
    div.card3 {
      background: #ffe405;
      div.card-subHeading {
        color: #1e1e1e;

        @media screen and (max-width: 360px) {
          line-height: 1.2;
          span {
            img {
              height: 2rem;
              left: 10px;
              top: -10px;
            }
          }
        }
      }
      div.card-textDesc {
        color: #1e1e1e;
        word-spacing: normal;
        letter-spacing: normal;
      }
      button {
        background: #0047af;
        color: #fafafa;
      }
    }
    div.splide__arrows {
      button {
        border-radius: 0;
        background: none;
        @media screen and (max-width: 460px) {
          margin-top: 0.7rem;
        }
        svg {
          height: 1.5rem;
          width: auto;
        }
      }
    }
  }
`;
