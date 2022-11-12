import styled from "styled-components";

export const StyleWhoWeAre = styled.div`
  margin: 26rem auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  div.WhoWeAre__text {
    margin: 0 2rem;
    div.heading {
      font-size: 64px;
      font-weight: bold;
    }
    div:nth-of-type(2) {
      font-size: 30px;
      opacity: 0.7;
      color: #2b2b2b;
    }
  }
  img {
    width: auto;
    height: 300px;
  }
`;
