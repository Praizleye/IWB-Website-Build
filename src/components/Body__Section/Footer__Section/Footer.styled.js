import styled from "styled-components";

export const StyleFooter = styled.div`
  margin-top: 5rem;
  padding: 4rem;
  background-color: #0047af;
  color: #fafafa;
  div.heading {
    text-align: center;
    font-size: 2rem;
    div {
      font-size: 1rem;
      margin-top: 1rem;
      letter-spacing: 0.05rem;
    }
    button {
      font-size: 1.1rem;
      background: #ffe401;
      height: 3.5rem;
      width: 12rem;
      border: none;
      margin-top: 1.5rem;
      border-radius: 7px;
      font-weight: bold;
      letter-spacing: 0.03rem;
    }
  }

  div.links {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(5, auto);
    place-items: center;

    img {
      align-self: start;
    }
    ul {
      font-size: 1.8rem;
      align-self: start;
      li {
        font-size: 1rem;
        list-style: none;
        padding-top: 1rem;
        a {
          text-decoration: none;
          color: #fafafa;
        }
      }
    }
  }
`;
