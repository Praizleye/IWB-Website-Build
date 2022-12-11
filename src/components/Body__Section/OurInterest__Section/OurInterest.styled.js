import styled from "styled-components";

export const StyleOurInterest = styled.div`
  background-color: #fafcff;
  padding: 4.5rem 4rem 9rem;
  margin-top: 7rem;
  @media screen and (max-width: 1200px) {
    padding: 4.5rem 2rem 9rem;
  }
  div.heading {
    font-size: 3rem;
    font-weight: bold;
    position: relative;
    color: #0047af;
    letter-spacing: 0.25rem;
    border-left: 3px solid #ffe401;
    padding-left: 2rem;
    margin-left: 1rem;
    z-index: 1;
    span {
      position: absolute;
      padding-left: 2rem;
      left: -4.5px;
      color: #fff;
      z-index: -1;
      -webkit-text-stroke-width: 0.86px;
      -webkit-text-stroke-color: #0047af;
    }
  }
  div.Ourinterest-body.container {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div.Ourinterest-img {
      img {
        width: 40rem;
        height: 30rem;
        object-fit: cover;
        object-position: center center;
        @media screen and (max-width: 1200px) {
          width: 30rem;
          height: 30rem;
        }
      }
    }
    div.Ourinterests-sections.container {
      /* background: #0047af; */
      height: 30rem;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      margin-left: 3rem;
      @media screen and (max-width: 1200px) {
        height: 28rem;
      }
      div.Ourinterest-section.active {
        border-left: 3px solid #2f88ff;
      }
      div.Ourinterest-section {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 2rem;
        height: 100%;
        margin: 0.2rem 0;
        border-left: 3px solid #b8b8b8;
        div.subheading.active {
          color: #fafafa;
          background: #2f88ff;
          height: 2.5rem;
          padding: 0.2rem 0.5rem;
          font-size: 1.5rem;
        }
        div.subheading {
          font-size: 1.3rem;
          font-weight: 500;
          color: #676464;
        }
        div.textDesc {
          font-size: 1.1rem;
          color: #676464;
          padding-top: 1rem;
          @media screen and (max-width: 1200px) {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;
