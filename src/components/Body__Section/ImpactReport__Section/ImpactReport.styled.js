import styled from "styled-components";

export const StyleImpactReport = styled.div`
  margin: 6rem 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div.ImpactReport__heading {
    font-size: 3rem;
    font-weight: 600;
    color: #065a8a;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* text-align: center; */
    img {
      display: block;
      align-self: start;
      margin-left: 11.5rem;
    }
    div {
      font-size: 24px;
      color: #595b60;
      font-weight: 300;
      margin-top: 0.5rem;
    }
  }
  div.sectionReport__1,
  div.sectionReport__2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 4rem 1rem;
    div.subSectionReport__1,
    div.subSectionReport__2,
    div.subSectionReport__3 {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      width: 23rem;
      height: 19rem;
      box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
        rgba(17, 17, 26, 0.05) 0px 8px 32px;
      div.subSectionReport__icon {
        padding: 1rem 3rem 2rem 3rem;
        img {
          height: 3.5rem;
          width: auto;
        }
        div.subSectionReport__figure {
          padding-top: 1rem;
          font-size: 1.3rem;
          font-weight: 500;
          img {
            height: 1.7rem;
            width: auto;
          }
        }
      }
      div.subSectionReport__text {
        color: #747779;
        font-size: 1.2rem;
        padding: 0 3rem 2rem 3rem;
        justify-self: center;
        align-self: center;
        height: 8rem;
      }
    }
  }
`;
