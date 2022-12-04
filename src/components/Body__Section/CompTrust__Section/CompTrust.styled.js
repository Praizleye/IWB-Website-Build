import styled from "styled-components";

export const StyleCompTrust = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5rem;
  /* background: #e7e6e6; */
  div.Footer__heading {
    font-size: 2rem;
    /* padding-left: 5rem; */
    color: #fff;
    -webkit-text-stroke-width: 0.86px;
    -webkit-text-stroke-color: #0047af;
    span {
      display: block;
    }
  }
  div:nth-of-type(2) {
    /* color: red; */
    width: 156px;
    border-radius: 20px;
    height: 3px;
    background: #e7e6e6;
    justify-self: flex-start;
  }
  /* div:nth-of-type(3) {
    padding-right: 30px;
  } */
  div:nth-of-type(4),
  div:nth-of-type(5) {
    border-left: 2px solid #e7e6e6;
    padding: 0px 40px;
  }
  div:nth-of-type(4) {
    img {
      height: 140px;
      width: auto;
    }
  }
`;
