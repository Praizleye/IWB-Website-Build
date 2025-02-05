import styled from "styled-components";

export const StyleFooter = styled.div`
  margin-top: 5rem;
  padding: 4rem;
  background-color: #000000;
  color: #fafafa;
  @media screen and (max-width: 1200px) {
    padding: 2rem 1rem;
  }
  div.heading {
    text-align: center;
    font-size: 2rem;
    @media screen and (max-width: 780px) {
      font-size: 1.5rem;
    }
    div {
      font-size: 1rem;
      margin-top: 1rem;
      letter-spacing: 0.05rem;
      @media screen and (max-width: 780px) {
        font-size: 0.9rem;
      }
    }
    a {
      text-decoration: none;
      button {
        cursor: pointer;
        font-size: 1.1rem;
        background: #2F2F2F;
        color: #FFFFFF;
        height: 3.5rem;
        width: 12rem;
        border: 2px solid rgba(4, 9, 33, 0.08);
        margin-top: 1.5rem;
        border-radius: 7px;
        font-weight: bold;
        letter-spacing: 0.03rem;
        transition: all 0.5s;
        @media screen and (max-width: 780px) {
          height: 3rem;
          width: 10rem;
          font-size: 1rem;
        }

        
      }
      button:hover {
        background-color: #ffe401;
        border-color: #ffe401;
        color: #1A1A1A;
      }
    }
  }

  div.links {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(5, auto);
    place-items: center;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(4, auto);
      grid-template-rows: repeat(2, auto);
    }
    @media screen and (max-width: 590px) {
      display: grid;
      grid-template-columns: repeat(2, auto);
      grid-template-rows: repeat(3, auto);
      justify-content: space-between;
      align-items: center;
      row-gap: 1rem;
    }

    img {
      align-self: start;
      @media screen and (max-width: 780px) {
        height: 1.5rem;
        width: auto;
        margin-top: 0.25rem;
      }
      @media screen and (max-width: 700px) {
        grid-column: 1 / 5;
        justify-self: start;
        margin-left: 1.5rem;
        margin-bottom: 1rem;
      }
      @media screen and (max-width: 590px) {
        grid-column: 1 / 3;
        margin-left: 0.5rem;
      }
    }
    ul {
      font-size: 1.8rem;
      align-self: start;
      @media screen and (max-width: 780px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 660px) {
        font-size: 1.3rem;
      }
      li {
        font-size: 1rem;
        list-style: none;
        padding-top: 1rem;
        @media screen and (max-width: 780px) {
          font-size: 0.9rem;
        }
        @media screen and (max-width: 600px) {
          font-size: 0.8rem;
        }
        a {
          text-decoration: none;
          color: #fafafa;
          display: flex;
          align-items: center;
          width: 100%;
          opacity: 0.8;
          transition: all 0.5s;

          svg {
            height: auto;
            width: 1.5rem;
            justify-self: flex-start;
            align-self: flex-start;
            margin-right: 0.5rem;
          }

          &:hover {
            opacity: 1;
            color: #ffe401;
          
          }
        }
      }
    }
    ul:nth-of-type(4) {
      @media screen and (max-width: 590px) {
        justify-self: start;
      }
    }
  }
`;

