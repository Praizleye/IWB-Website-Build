import styled from "styled-components";

export const StyleWhoWeAre = styled.div`
  /* margin: 3rem auto 0 auto; */
  margin-top: 5rem;
  padding: 3rem 3rem;
  background-color: #f1f4fb;
  div.heading {
    font-size: 3.5rem;
    font-weight: bold;
    position: relative;
    color: #0047af;
    letter-spacing: 0.25rem;
    border-left: 3px solid #ffe401;
    margin-left: 2rem;
    padding-left: 3rem;
    z-index: 1;
    span {
      position: absolute;
      padding-left: 3rem;
      left: -0.5rem;
      color: #fff;
      /* letter-spacing: ; */
      z-index: -1;
      -webkit-text-stroke-width: 0.86px;
      -webkit-text-stroke-color: #0047af;
    }
  }
  div.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 2rem;
    div.WhoWeAre__img {
      margin-top: 3rem;
      position: relative;
      img {
        border-right: 3px solid #ffe401;
        width: auto;
        height: 25rem;
        width: 25rem;
        object-fit: cover;
        object-position: center center;
      }
      div.img-cover {
        height: 400px;
        width: 397px;
        position: absolute;
        top: 0;
        background-color: #675f4d;
        opacity: 0.36;
      }
    }
    div.About__text-content {
      padding: 0 1rem 0 4rem;
      display: flex;
      margin-top: 25px;
      line-height: 1.9;
      letter-spacing: 0.05rem;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      div.sub-heading {
        font-size: 2rem;
        color: #0047af;
        background: #fafafa;
        padding: 0 3rem;
      }

      div.About__text-description {
        font-size: 1.1rem;
        line-height: 1.8;
        color: #6b6b6b;
        line-height: 2.3;
      }
      button {
        margin-top: 1.5rem;
        background: #0047af;
        height: 3rem;
        width: 12rem;
        color: #fafafa;
        font-size: 1.05rem;
        border: none;
        transition: transform 0.5s ease-in-out;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    div.partner {
      padding: 3rem 1rem;
    }
    div.WhoWeAre__img.partner-img {
      img {
        border: none;
        border-left: 3px solid #ffe401;
      }
    }
  }
`;
