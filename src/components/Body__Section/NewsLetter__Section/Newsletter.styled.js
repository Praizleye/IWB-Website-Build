import styled from "styled-components";

export const StyleNewsletter = styled.div`
  /* margin: 8rem 0 5rem; */
  padding: 6rem 4rem 5rem;
  /* background: #fff; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1200px) {
    padding: 6rem 3rem 5rem;
  }
  div.textContent {
    justify-self: start;
    div.heading {
      color: #0e63f4;
      letter-spacing: 0.05rem;
      line-height: 1.1;
      font-weight: 500;
      span {
        font-size: 2rem;
        display: block;
        color: #0047af;
        font-weight: 600;
        letter-spacing: normal;
        display: flex;
        justify-content: baseline;
        align-items: flex-start;
        flex-direction: column;

        img {
          align-self: start;
          margin-top: 0.7rem;
          height: 0.2rem;
          width: 6rem;
        }
      }
    }
    div.textContent {
      padding: 1rem 1rem 0 0;
      color: #2b2b2b;
      opacity: 0.7;
      /* text-align: center; */
      font-size: 1.1rem;
      @media screen and (max-width: 1200px) {
        font-size: 1rem;
        padding: 0.5rem 0.5rem 0 0;
      }
    }
    div.action {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      margin: 1.5rem 2rem 0.5rem 0;
      input {
        margin: 1rem;
        width: 70%;
        height: 4rem;
        padding: 0 2rem;
        font-size: 1.7rem;
        border: none;
        outline: none;
        background: #fff;
        border-radius: 4px;
        @media screen and (max-width: 1200px) {
          height: 2.9rem;
        }
      }
      button {
        width: 12rem;
        height: 3.8rem;
        margin: 1rem;
        font-size: 1.7rem;
        background: #478bff;
        color: #fafafa;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        @media screen and (max-width: 1200px) {
          height: 2.7rem;
          font-size: 1.5rem;
        }
      }
    }
  }
  div {
    img {
      width: 30rem;
      height: 20rem;
      object-fit: cover;
      @media screen and (max-width: 1200px) {
        width: 20rem;
        height: 15rem;
      }
    }
  }
`;
