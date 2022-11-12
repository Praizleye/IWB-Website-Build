import styled from "styled-components";

export const StyleImpactReport = styled.div`
  margin-top: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  div.ImpactReport__heading {
    font-size: 64px;
    font-weight: 600;
    color: #065a8a;
  }
  div.sectionReport__1,
  div.sectionReport__2 {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgba(132, 132, 132, 0.5);

    /* opacity: 0.5; */
    border-radius: 7px;
    width: 80%;
    /* height: 170px; */
    padding: 0.5rem;
    margin: 1rem 0;

    div.subSectionReport__1,
    div.subSectionReport__2,
    div.subSectionReport__3 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 1rem 0.5rem;
      border-left: 1px solid rgba(132, 132, 132, 0.5);
      /* background: blue; */
      div.subSectionReport__icon {
        background: #50b3fb;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        display: grid;
        place-items: center;
        img {
          margin: 0.5rem;
        }
      }
      div.subSectionReport__figure {
        font-size: 1.5rem;
        font-weight: bolder;
        color: #2b2b2b;
        margin-top: 0.5rem;
      }
      div.subSectionReport__text {
        padding: 0 3rem;
        color: #2b2b2b;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin: 0.3rem 1.5rem;
        text-align: center;
      }
    }
    div.subSectionReport__1 {
      border: none;
    }
  }
`;
