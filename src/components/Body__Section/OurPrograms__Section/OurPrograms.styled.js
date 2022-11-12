import styled from "styled-components";

export const StyleOurPrograms = styled.div`
  background: rgba(0, 50, 124, 0.62);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
  position: relative;
  div.heading {
    font-size: 64px;
    color: #fafafa;
  }
  div.slider__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 3rem auto;
    div.slide {
      /* width: 100%; */
      margin: 2rem 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      /* background-color: blue; */
      div.slide__image {
        height: 15rem;
        width: 17rem;
        background: #fafafa;
        position: relative;
        border-radius: 7px;
        img {
          height: 12rem;
          width: 14rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          object-fit: cover;
          object-position: top center;
        }
      }
      div.slideText__heading {
        font-size: 40px;
        color: #fafafa;
        text-align: center;
      }
      div.slideText {
        color: #fafafa;
        text-align: center;
      }
    }
  }
  div.AnimatableObj1,
  div.AnimatableObj2 {
    position: absolute;
  }
  div.AnimatableObj1 {
    right: 25px;
    top: 8px;
  }
  div.AnimatableObj2 {
    left: 25px;
    top: 85px;
  }
`;
export const StyleResource = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  div.resource__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    div.resource__image {
      img {
        height: 15rem;
        width: auto;
      }
    }
    div.resource__figures {
      margin-left: 2rem;
      div.resource__text-heading {
        font-size: 64px;
      }
      div.resource__text {
        color: #2b2b2b;
        font-size: 20px;
      }
      button.resource__btn {
        width: 16rem;
        height: 2.6rem;
        border-radius: 19px;
        background: #50b3fb;
        border: none;
        color: #fafafa;
        font-size: 1.1rem;
        margin-top: 0.5rem;
      }
    }
  }
`;
