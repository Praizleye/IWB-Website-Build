import styled from "styled-components";

export const StyleNewsletter = styled.div`
  margin: 5rem 0;
  padding: 3rem 4rem;
  background: #f1f4fb;
  div.heading {
    text-align: center;
    color: #0e63f4;
    letter-spacing: 0.05rem;
    line-height: 1.1;
    font-weight: 500;
    span {
      font-size: 64px;
      display: block;
      color: #0047af;
      font-weight: 600;
      letter-spacing: normal;
    }
  }
  div.textContent {
    padding-top: 1rem;
    color: #2b2b2b;
    opacity: 0.7;
    text-align: center;
    font-size: 1.1rem;
  }
  div.action {
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      margin-top: 2rem;
      width: 70%;
      height: 5rem;
      padding: 0 2rem;
      font-size: 1.7rem;
    }
    button {
      width: 30%;
      height: 5rem;
      margin-top: 2rem;
      margin-left: 1rem;
      font-size: 1.7rem;
      background: #478bff;
      color: #fafafa;
      border: none;
      cursor: pointer;
    }
  }
`;
