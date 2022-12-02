import styled from "styled-components";

export const StyleTestimonials = styled.div`
  margin-top: 4rem;
  div.heading {
    text-align: center;
    color: #0e63f4;
    letter-spacing: 0.05rem;
    line-height: 0.95;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    span {
      font-size: 3.5rem;
      font-weight: 600;
      display: block;
      color: #0047af;
      letter-spacing: normal;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        align-self: start;
        /* margin-left: 1rem; */
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
    div.card {
      width: 32rem;
      height: 15rem;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      padding: 1.5rem;
      display: grid;
      grid-template-areas:
        "img cardName"
        "img cardDate"
        ". cardStar"
        ". cardText";
      margin: 1rem;
      img {
        grid-area: img;
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
        }
        img:nth-of-type(2) {
          height: 2.9rem;
        }
        img:nth-of-type(3) {
          height: 2.6rem;
        }
        img:nth-of-type(4) {
          height: 2.2rem;
        }
        img:nth-of-type(5) {
          height: 1.7rem;
          align-self: flex-start;
        }
      }
      div.card-textContent {
        grid-area: cardText;
        padding-left: 1rem;
        color: #4e6269;
      }
    }
    div.splide__arrows {
      position: absolute;
      bottom: -3rem;
      right: 12rem;
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
  }
`;
