import styled from "styled-components";

export const StyleWhoWeAre = styled.div`
  /* margin: 3rem auto 0 auto; */
  margin-top: 3rem;
  padding: 2rem 3rem;
  background-color: #f1f4fb;
  /* background: #fafafa; */
  @media screen and (max-width: 1200px) {
    padding: 2rem 1rem;
  }
  div.heading {
    font-size: 3rem;
    font-weight: bold;
    position: relative;
    color: #0047af;
    letter-spacing: 0.25rem;
    border-left: 3px solid #ffe401;
    margin-left: 2rem;
    padding-left: 2rem;
    z-index: 1;
    @media screen and (max-width: 1200px) {
      font-size: 2.5rem;
    }
    span {
      position: absolute;
      padding-left: 2rem;
      left: -0.25rem;
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
        @media screen and (max-width: 1200px) {
          height: 22rem;
          width: 22rem;
        }
      }
      div.img-cover {
        height: 25rem;
        width: 24.8125rem;
        position: absolute;
        top: 0;
        background-color: #675f4d;
        opacity: 0.36;
        @media screen and (max-width: 1200px) {
          height: 22rem;
          width: 21.8125rem;
        }
      }
    }
    div.About__text-content {
      background: #fafafa;
      height: 25rem;
      padding: 0 1rem 0 4rem;
      display: flex;
      margin-top: 2.95rem;
      line-height: 1.9;
      letter-spacing: 0.05rem;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      @media screen and (max-width: 1200px) {
        height: 22rem;
      }
      div.sub-heading {
        font-size: 2rem;
        color: #0047af;
      }

      div.About__text-description {
        font-size: 1.1rem;
        line-height: 1.8;
        color: #6b6b6b;
        line-height: 2.3;
        @media screen and (max-width: 1200px) {
          font-size: 1rem;
          line-height: 1.9;
          padding-right: 1rem;
        }
      }
      button {
        margin: 1rem 0;
        background: #0047af;
        height: 3rem;
        width: 12rem;
        border-radius: 4px;
        color: #fafafa;
        font-size: 1.05rem;
        border: none;
        transition: transform 0.5s ease-in-out;
        cursor: pointer;
        @media screen and (max-width: 1200px) {
          margin: 2rem 0;
        }
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
        margin-right: 1rem;
      }
    }
  }
`;
