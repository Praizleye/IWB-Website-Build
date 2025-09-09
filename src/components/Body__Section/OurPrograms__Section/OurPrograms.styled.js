import styled from "styled-components";

export const StyleOurPrograms = styled.section`
  background-color: #f1f4fb;
  padding: 3rem 5rem 6rem;
  @media screen and (min-width: 1500px){
    padding-inline: calc((100% - 1300px) / 2);
  }
  @media screen and (max-width: 1200px) {
    padding: 3rem 2rem 6rem;
  }
  @media screen and (max-width: 470px) {
    padding: 3rem 2rem 3rem;
  }
  div.heading {
    font-size: 3rem;
    font-weight: bold;
    position: relative;
    color: #0047af;
    // letter-spacing: 0.1rem;
    border-left: 3px solid #ffe401;
    padding-left: 2rem;
    z-index: 1;

    @media screen and (max-width: 1200px) {
      font-size: 2.5rem;
    }
    @media screen and (max-width: 590px) {
      font-size: 2rem;
      padding-left: 1rem;
    }
    @media screen and (max-width: 360px) {
      font-size: 1.8rem;
      width: max-content;
    }
    span {
      position: absolute;
      padding-left: 2rem;
      left: -0.25rem;
      color: #fff;
      z-index: -1;
      -webkit-text-stroke-width: 0.86px;
      -webkit-text-stroke-color: #0047af;
      @media screen and (max-width: 980px) and (min-width: 970px) {
        display: none;
      }

      @media screen and (max-width: 590px) {
        padding-left: 1rem;
      }
    }
  }
  div.Ourprograms.container.cards {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    position: relative;

    div.card {
      width: 23rem;
      padding-block:0.5rem; 
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      background-color: #fff;
      @media screen and (max-width: 1200px) {
        width: 20rem;
       
      }
      @media screen and (max-width: 470px) {
        width: 17rem;
      }
      @media screen and (max-width: 410px) {
        width: 15rem;
      }
      div.card-img {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 23rem;
          padding: 1rem;
          height: 16rem;
          object-fit: cover;
          object-position: top center;
          @media screen and (max-width: 1200px) {
            width: 19rem;
            height: 14rem;
          }
          @media screen and (max-width: 470px) {
            width: 16rem;
            height: 14rem;
          }
          @media screen and (max-width: 410px) {
            width: 15rem;
            height: 14rem;
          }
        }
      }
      div.card-subHeading {
        font-family: '"Host Grotesk"';
        padding: 1rem;
        font-size: 1.2rem;
        font-weight: 400;
        color: #0047af;
        @media screen and (max-width: 1200px) {
          padding: 1rem 1.5rem;
        }
        @media screen and (max-width: 410px) {
          font-size: 1.05rem;
          padding: 1rem 0.5rem;
        }
      }
      div.card-textDesc {
        span{
          display: block;
          font-weight:bold;
        }

        color:#747779;
        padding: 0 1rem;
        font-size: 0.9rem;
        height: 7rem;
        @media screen and (max-width: 1200px) {
          padding: 0.2rem 1rem;
          font-size: 0.8rem;
        }
        @media screen and (max-width: 410px) {
          padding: 0 0.5rem;
          font-size: 0.7rem;
        }
      }
      button {
        margin: 1rem;
        width: 21rem;
        height: 3rem;
        background: #0047af;
        border: none;
        color: #fff;
        font-size: 1.3rem;
        cursor: pointer;
        border-radius: 4px;
        @media screen and (max-width: 1200px) {
          width: 17rem;
          margin: 0 1rem;
          height: 2.5rem;
          font-size: 1.1rem;
        }
        @media screen and (max-width: 470px) {
          width: 15rem;
          margin: 1rem 1rem;
          height: 2.5rem;
          font-size: 1rem;
        }
        @media screen and (max-width: 410px) {
          width: 13rem;
          margin: 1rem 1rem 0;
          height: 2rem;
          font-size: 0.9rem;
        }
      }
      button.comingSoon {
        color: #0047af;
        background: #fafafa;
        border: 1px solid #0047af;
      }
    }
    div.splide__arrows {
      position: absolute;
      top: -4.8rem;
      right: 5rem;
      @media screen and (max-width: 612px) {
        display: none;
      }
      button.splide__arrow--prev {
        height: 3.5rem;
        width: 3.5rem;
        left: -4rem;
        :hover {
          background: #0047af;
        }
        svg {
          height: auto;
          transform: rotate(360deg);
          width: 1.8rem;
          color: #fafafa;
        }
      }
      button.splide__arrow--next {
        height: 3.5rem;
        width: 3.5rem;
        background: #d9e1f4;
        left: 1rem;
        :hover {
          background: #0047af;
        }
        svg {
          height: auto;
          width: 1.8rem;
          color: #fafafa;
          /* transform: rotate(180deg); */
        }
      }
    }
    ul.splide__pagination.splide__pagination--ltr {
      margin-top: 3rem;
      position: absolute;
      bottom: -4rem;
      @media screen and (max-width: 470px) {
        bottom: -2rem;
      }
      li {
        padding: 0 0.5rem;
        @media screen and (max-width: 470px) {
          padding: 0 0.25rem;
        }
        button.is-active {
          background: #0047af;
        }
      }
    }
  }
`;
