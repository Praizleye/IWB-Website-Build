import styled from "styled-components";

export const StyleFooter = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: red; */
  div.Footer__container {
    /* width: 80%; */
    div.Footer__heading {
      font-size: 64px;
      text-align: center;
      font-weight: 500;
      color: #555555;
      /* background-color: aliceblue; */
    }
    div.companies__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 2rem auto 3rem auto;
      background-color: #d9d9d9;
      width: 100vw;

      div.companies__logo {
        height: 18rem;
        border-radius: 50%;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 14rem;
          width: auto;
          border-radius: 50%;
          padding: 1rem;
        }
      }
    }
  }
`;

export const StyleFooterLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  color: #2b2b2b;
  margin: 2rem auto;
  /* background: blue; */
  /* margin: 0 5%; */
  div.FooterLinks__contact-us {
    img {
    }
    div.company-name {
      font-size: 1.5rem;
      font-weight: bold;
    }
    div.company-email,
    div.company-number {
      margin: 0.4rem 0;
      font-weight: 600;
    }
    button {
      margin: 0.5rem auto;
      width: 10rem;
      height: 2.2rem;
      border-radius: 19px;
      background: #50b3fb;
      border: none;
      color: #fafafa;
      font-size: 1.1rem;
    }
  }

  ul.FooterLinks__quick-links {
    div.heading {
      font-size: 1.5rem;
      font-weight: Bold;
    }
    li {
      list-style: none;
      margin: 0.2rem 0;
      a {
        text-decoration: none;
        color: #2b2b2b;
        font-weight: 600;
      }
    }
  }
  ul.FooterLinks__social-links {
    div.heading {
      font-size: 1.5rem;
      font-weight: Bold;
    }
    li {
      list-style: none;
      margin: 0.2rem 0;
      a {
        text-decoration: none;
        color: #2b2b2b;
        font-weight: 600;
      }
    }
  }
  div.FooterLinks__back-to-top {
    background: #50b3fb;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    img {
    }
  }
`;
