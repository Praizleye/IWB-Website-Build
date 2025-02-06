import styled from "styled-components";

export const StyleResources = styled.section`
  margin-top: 6rem;
  background-color: #f1f4fb;
  /* padding-top: 2rem; */
  div.Resources.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 590px) {
      flex-direction: column;
    }
    div.Resources-books.imgs-container {
      display: grid;
      grid-template-columns: repeat(2, 15rem);
      grid-template-rows: repeat(2, 15rem);
      grid-gap: 5px;
      padding-top: 3rem;
      @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, 12rem);
        grid-template-rows: repeat(2, 12rem);
      }
      @media screen and (max-width: 760px) {
        grid-template-columns: repeat(2, 8rem);
        grid-template-rows: repeat(2, 8rem);
        /* row-gap: 25px; */
      }
      @media screen and (max-width: 590px) {
        margin-right: 4.5rem;
        gap: 5rem;
      }

      div.img-container {
        width: 20rem;
        height: 20rem;
        align-self: center;

        img {
          width: 15rem;
          height: auto;
          @media screen and (max-width: 1200px) {
            width: 13rem;
          }
          @media screen and (max-width: 760px) {
            width: 10rem;
          }
          @media screen and (max-width: 590px) {
            width: 13rem;
          }
        }
      }
      div.img-container:nth-of-type(2) {
        padding-top: 3rem;
      }
      div.img-container:nth-of-type(4) {
        padding-top: 3rem;
      }
    }
    div.Resource-text-section {
      padding: 0 5rem;
      width: 60%;
      @media screen and (max-width: 1200px) {
        padding: 0 2rem;
        width: 70%;
      }
      @media screen and (max-width: 590px) {
        padding: 0 2rem;
        width: 100%;
      }
      div.heading {
        font-size: 3rem;
        font-weight: bold;
        position: relative;
        color: #0047af;
        letter-spacing: 0.25rem;
        border-left: 3px solid #ffe401;
        padding-left: 2rem;
        z-index: 1;
        @media screen and (max-width: 1200px) {
          font-size: 2.5rem;
        }
        @media screen and (max-width: 760px) {
          font-size: 2.5rem;
        }
        @media screen and (max-width: 590px) {
          font-size: 2rem;
          margin-top: 3rem;
        }
        span {
          position: absolute;
          padding-left: 2rem;
          left: -4.5px;
          color: #fff;
          z-index: -1;
          -webkit-text-stroke-width: 0.86px;
          -webkit-text-stroke-color: #0047af;
        }
      }
      div.Resource-text-Desc {
        margin-top: 2rem;
        line-height: 1.8;
        @media screen and (max-width: 760px) {
          font-size: 0.9rem;
          line-height: 1.3;
        }
        @media screen and (max-width: 590px) {
          /* font-size: 0.9rem; */
          line-height: 1.7;
        }
      }
      button {
        width: 12rem;
        height: 2.5rem;
        background: #0047af;
        color: #fafafa;
        margin-top: 2rem;
        border: none;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.05rem;
        :hover {
          transform: scale(1.05);
        }
        svg {
          margin-right: 1rem;
          font-size: 1.1rem;
        }
        a {
          text-decoration: none;
          color: #fafafa;
        }
      }
    }
  }
`;
