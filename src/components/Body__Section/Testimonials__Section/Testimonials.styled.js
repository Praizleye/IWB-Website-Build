import styled from "styled-components";

export const StyleTestimonials = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div.Testimonials__container {
    width: 80%;
    div.Testimonials__heading {
      font-size: 64px;
      color: #fafafa;
      text-align: center;
    }
    div.Testimonials__body {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      div.Testimonial__hero-image {
        img {
          height: 30rem;
          width: auto;
        }
      }
      div.Testimonial__cards {
        position: relative;
        div.Testimonial__card {
          width: 45rem;
          height: 14rem;
          border-radius: 7px;
          background: #fafafa;
          display: flex;
          justify-content: space-around;
          align-items: center;
          position: absolute;
          top: -200px;
          left: -58px;
          div.Testimonial__card-image {
            margin: 0 1rem;
            img {
              height: 8rem;
              width: auto;
              border-radius: 50%;
            }
          }
          div.Testimonial__card-text-container {
            margin: 0 1rem;
            div.Testimonial__card-text-container-name {
              font-size: 30px;
              font-weight: 400;
            }
            div.Testimonial__card-text-container-text {
              font-size: 22px;
              font-weight: 300;
              opacity: 0.9;
            }
            div.Testimonial__card-text-container-date {
              font-size: 18px;
              opacity: 0.8;
              margin-top: 1rem;
              font-style: italic;
            }
          }
        }
        div.Animatable1 {
          position: absolute;
          left: 39rem;
          top: -5rem;
          img {
            height: 12rem;
            width: auto;
          }
        }
      }
    }
  }
`;

export const StylePartner = styled.div`
  margin-top: 4rem;
  color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  div.Partner__heading {
    font-size: 64px;
    text-align: center;
    font-weight: 600;
  }
  div.Partner__text {
    width: 60%;
    text-align: center;
    margin-top: 1.5rem;
    opacity: 0.7;
    font-size: 1.2rem;
  }
  button.support {
    margin: 1.5rem auto;
    width: 16rem;
    height: 2.6rem;
    border-radius: 19px;
    background: #50b3fb;
    border: none;
    color: #fafafa;
    font-size: 1.1rem;
  }
  div.Animatable2 {
    position: absolute;
    left: 53rem;
    img {
      height: 12rem;
      width: auto;
    }
  }
  div.Animatable3 {
    position: absolute;
    left: 10rem;
    top: -3rem;
    img {
      height: 4rem;
      width: auto;
    }
  }
`;
