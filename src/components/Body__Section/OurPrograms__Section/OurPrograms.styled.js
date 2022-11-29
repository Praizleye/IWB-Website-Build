import styled from "styled-components";

export const StyleOurPrograms = styled.div`
  background-color: #f1f4fb;
  padding: 2rem 5rem 5rem;
  div.heading {
    font-size: 64px;
    font-weight: bold;
    position: relative;
    color: #0047af;
    letter-spacing: 0.25rem;
    border-left: 3px solid #ffe401;
    padding-left: 2rem;
    z-index: 1;
    span {
      position: absolute;
      padding-left: 2rem;
      left: -6.5px;
      color: #fff;
      z-index: -1;
      -webkit-text-stroke-width: 0.86px;
      -webkit-text-stroke-color: #0047af;
    }
  }
  div.Ourprograms.container.cards {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    div.card {
      width: 24rem;
      height: 29rem;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      margin: 0 1rem;
      /* background-color: #0047af; */
      div.card-img {
        img {
          width: 23rem;
          padding: 1rem;
          height: 14rem;
          object-fit: cover;
          object-position: 50% 50%;
        }
      }
      div.card-subHeading {
        padding: 1rem;
        font-size: 1.2rem;
        font-weight: 400;
      }
      div.card-textDesc {
        padding: 1rem;
      }
      button {
        margin: 1rem;
        width: 21rem;
        height: 3rem;
        background: #0047af;
        border: none;
        color: #fff;
        font-size: 1.3rem;
        cursor: pointer;
      }
    }
  }
`;
