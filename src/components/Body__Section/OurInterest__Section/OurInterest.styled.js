import styled from "styled-components";

export const StyleOurInterest = styled.div`
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  div.OurInterest__container {
    width: 80%;

    div.OurInterest__heading {
      font-size: 64px;
      color: #065a8a;
      text-align: center;
    }
    div.OurInterest__container-cards {
      margin-top: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div.OurInterest__card {
        height: 20rem;
        width: 17rem;
        background: #ededed;
        border-radius: 2rem;
        padding: 1rem 0.5rem;
        display: grid;
        place-items: center;
        div.OurInterest__figure-icon {
          color: white;
          height: 4rem;
          width: 4rem;
          background: #1790ff;
          display: grid;
          place-items: center;
          border-radius: 50%;
          img {
            height: 3rem;
            width: 3rem;
          }
        }
        div.OurInterest__card-heading {
          font-size: 30px;
          text-align: center;
          font-weight: bold;
          color: #4b4b4b;
        }
        div.OurInterest__card-text {
          text-align: center;
          color: #2b2b2b;
          opacity: 0.7;
        }
      }
    }
  }
`;
