import styled from "styled-components";

export const StyleTestimonials = styled.section`
  // margin-top: 7rem;
  padding: 5rem 0 8rem;
  background: #fff;


  div.heading {
    text-align: center;
    color: #1A1A1A;
    letter-spacing: 0.1rem;
    line-height: 0.95;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 590px) {
      font-size: 0.9rem;
    }
    @media screen and (max-width: 400px) {
      font-size: 0.8rem;
    }
    span {
      font-size: 3rem;
      font-weight: 600;
      display: block;
      color: #0047af;
      letter-spacing: normal;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 10px;
      @media screen and (max-width: 1200px) {
        font-size: 2.5rem;
      }
      @media screen and (max-width: 760px) {
        font-size: 2rem;
      }
      @media screen and (max-width: 590px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 480px) {
        font-size: 1.2rem;
      }

      img {
        align-self: start;
        margin-top: 0.7rem;
      }
    }
  }
  div.testimonial-cards__container {
    margin: 2rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: max-content;
    position: relative;
    @media screen and (max-width: 1200px) {
      margin: 2rem 1rem;
    }
    @media screen and (max-width: 600px) {
      margin: 2rem 0;
    }
    div.card {
      width: 35rem;
      height: 18rem;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      padding: 1.5rem;
      display: grid;
      grid-template-areas:
        "img cardName"
        "img cardDate"
        ". cardStar"
        ". cardText";
      margin: 1rem;
      @media screen and (max-width: 612px) {
        grid-template-areas:
          "img cardName"
          "img cardDate"
          ". cardStar"
          "cardText cardText";
        margin: 0.5rem;
        width: 25rem;
      }
      @media screen and (max-width: 480px) {
        grid-template-areas:
          "img cardName"
          "img cardDate"
          "cardStar cardStar"
          "cardText cardText";
        margin: 0.25rem;
        width: 20rem;
      }

      img {
        grid-area: img;
        padding-left: 0.75rem;
      }
      div.card-name {
        grid-area: cardName;
        padding-left: 1rem;
        font-weight: bold;
        color: #1a1a1a;
      }
      div.card-date {
        grid-area: cardDate;
        padding-left: 1rem;
        color: #4e6269;
      }
      div.card-star {
        grid-area: cardStar;
        padding-left: 1rem;
        display: flex;
        justify-content: start;
        align-items: center;
        img:nth-of-type(1) {
          height: 3.1rem;
          @media screen and (max-width: 1200px) {
            height: 2rem;
          }
        }
        img:nth-of-type(2) {
          height: 2.9rem;
          @media screen and (max-width: 1200px) {
            height: 1.7rem;
          }
        }
        img:nth-of-type(3) {
          height: 2.6rem;
          @media screen and (max-width: 1200px) {
            height: 1.4rem;
          }
        }
        img:nth-of-type(4) {
          height: 2.2rem;
          @media screen and (max-width: 1200px) {
            height: 1.2rem;
          }
        }
        img:nth-of-type(5) {
          height: 1.7rem;
          align-self: flex-start;
          @media screen and (max-width: 1200px) {
            height: 0.9rem;
          }
        }
      }
      div.card-textContent {
        grid-area: cardText;
        padding-left: 1rem;
        color: #4e6269;
        @media screen and (max-width: 1200px) {
          padding-top: 0.5rem;
        }
      }
      @media screen and (max-width: 1200px) {
        width: 34rem;
        height: 14rem;
        font-size: 0.85rem;
        padding: 1rem;
      }
      @media screen and (max-width: 760px) {
        width: 30rem;
        height: 17rem;
        font-size: 0.85rem;
        padding: 1rem 0.5rem;
      }
      @media screen and (max-width: 660px) {
        width: 27rem;
        height: 15rem;
        font-size: 0.85rem;
        padding: 1rem 0.75rem;
      }
      @media screen and (max-width: 560px) {
        width: 22rem;
        height: 19rem;
        font-size: 0.85rem;
        padding: 1rem 0.75rem;
      }
      @media screen and (max-width: 480px) {
        width: 20rem;
        height: 21rem;
        padding: 0.5rem 0.5rem;
      }
      @media screen and (max-width: 380px) {
        width: 18rem;
        height: 22rem;
        padding: 0.5rem 0.5rem;
      }
      @media screen and (max-width: 344px) {
        width: 16rem;
        height: 24rem;
        padding: 0.5rem 0.5rem;
      }
    }
    div.splide__arrows {
      position: absolute;
      bottom: -3.5rem;
      left: 6rem;
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
