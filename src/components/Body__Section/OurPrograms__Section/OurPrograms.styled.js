import styled from "styled-components";

export const StyleOurPrograms = styled.div`
  background-color: #f1f4fb;
  padding: 3rem 5rem 5rem;
  @media screen and (max-width: 1200px) {
    padding: 3rem 2rem 5rem;
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
    @media screen and (max-width: 590px) {
      font-size: 2rem;
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
  div.Ourprograms.container.cards {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    position: relative;

    div.card {
      width: 23rem;
      height: 29rem;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      background-color: #fff;
      @media screen and (max-width: 1200px) {
        width: 20rem;
        height: 26rem;
      }
      div.card-img {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 23rem;
          padding: 1rem;
          height: 14rem;
          object-fit: cover;
          object-position: 50% 50%;
          @media screen and (max-width: 1200px) {
            width: 19rem;
            height: 14rem;
          }
        }
      }
      div.card-subHeading {
        padding: 1rem;
        font-size: 1.2rem;
        font-weight: 400;
        color: #0047af;
        @media screen and (max-width: 1200px) {
          padding: 0 1.5rem;
        }
      }
      div.card-textDesc {
        padding: 1rem;
        font-size: 0.9rem;
        height: 7rem;
        @media screen and (max-width: 1200px) {
          padding: 0.5rem 1.5rem;
          font-size: 0.8rem;
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
      }
      button.comingSoon {
        color: #0047af;
        background: #fafafa;
        border: 1px solid #0047af;
      }
    }
    div.splide__arrows {
      position: absolute;
      bottom: -3rem;
      right: 5rem;
      button.splide__arrow.splide__arrow--prev {
        height: 3.5rem;
        width: 3.5rem;
        :hover {
          background: #0047af;
        }
        svg {
          height: auto;
          width: 1.8rem;
          color: #fafafa;
        }
      }
      button.splide__arrow.splide__arrow--next {
        height: 3.5rem;
        width: 3.5rem;
        background: #d9e1f4;
        :hover {
          background: #0047af;
        }
        svg {
          height: auto;
          transform: rotate(180deg);
          width: 1.8rem;
          color: #fafafa;
        }
      }
    }
    ul.splide__pagination.splide__pagination--ltr {
      margin-top: 3rem;
      position: absolute;
      bottom: -4rem;
      li {
        padding: 0 0.5rem;
        button.is-active {
          background: #0047af;
        }
      }
    }
  }
`;
