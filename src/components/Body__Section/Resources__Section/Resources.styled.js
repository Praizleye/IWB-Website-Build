import styled from "styled-components";

export const StyleResources = styled.div`
  margin-top: 5rem;
  background-color: #f1f4fb;
  div.Resources.container {
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    div.Resources-books.imgs-container {
      display: grid;
      grid-template-columns: repeat(2, 15rem);
      grid-template-rows: repeat(2, 15rem);
      grid-gap: 5px;

      div.img-container {
        width: 20rem;
        height: 20rem;
        align-self: center;
        img {
          width: 15rem;
          height: auto;
        }
      }
      div.img-container:nth-of-type(2) {
        padding-top: 3rem;
      }
      div.img-container:nth-of-type(4) {
        padding-top: 3rem;
      }
    }
    div.Resource-text-section {
      padding: 0 5rem;
      /* background: violet; */
      width: 60%;
      div.heading {
        font-size: 3rem;
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
          left: -4.5px;
          color: #fff;
          z-index: -1;
          -webkit-text-stroke-width: 0.86px;
          -webkit-text-stroke-color: #0047af;
        }
      }
      div.Resource-text-Desc {
        margin-top: 2rem;
        line-height: 1.8;
      }
      button {
        width: 12rem;
        height: 2.5rem;
        background: #0047af;
        color: #fafafa;
        margin-top: 2rem;
        border: none;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.05rem;
        :hover {
          transform: scale(1.05);
        }
        svg {
          margin-right: 1rem;
          font-size: 1.1rem;
        }
      }
    }
  }
`;
