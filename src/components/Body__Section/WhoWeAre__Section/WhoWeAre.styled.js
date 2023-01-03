import styled from "styled-components";

export const StyleWhoWeAre = styled.div`
  margin-top: 3rem;
  padding: 2rem 3rem;
  background-color: #f1f4fb;
  @media screen and (max-width: 1200px) {
    padding: 2rem 1rem;
  }
  @media screen and (max-width: 850px) {
    padding: 2rem 0;
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
    @media screen and (max-width: 590px) {
      font-size: 2rem;
      padding-left: 1rem;
    }

    span {
      position: absolute;
      padding-left: 2rem;
      left: -0.25rem;
      color: #fff;
      z-index: -1;
      -webkit-text-stroke-width: 0.86px;
      -webkit-text-stroke-color: #0047af;
      @media screen and (max-width: 980px) and (min-width: 970px) {
        display: none;
      }

      @media screen and (max-width: 590px) {
        padding-left: 1rem;
      }
    }
  }
  div.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 2rem;
    @media screen and (max-width: 590px) {
      flex-direction: column;
    }

    div.WhoWeAre__img {
      margin-top: 3rem;
      position: relative;
      @media screen and (max-width: 590px) {
        margin-right: 2rem;
      }
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
        @media screen and (max-width: 830px) {
          height: 18rem;
          width: 18rem;
        }
        @media screen and (max-width: 768px) {
          height: 15rem;
          width: 15rem;
        }
        @media screen and (max-width: 590px) {
          height: auto;
          width: 100%;
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
        @media screen and (max-width: 830px) {
          height: 17rem;
          width: 17.8125rem;
        }
        @media screen and (max-width: 768px) {
          height: 14rem;
          width: 14.8125rem;
        }
        @media screen and (max-width: 590px) {
          height: 100%;
          width: 99.8%;
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
      @media screen and (max-width: 830px) {
        height: 17.5rem;
        line-height: 1.5;
      }
      @media screen and (max-width: 768px) {
        height: 15rem;
        line-height: 1.3;
        padding: 0 0 0 1rem;
      }
      @media screen and (max-width: 590px) {
        margin: 0 2rem 0 0;
        padding: 1rem 1rem;
        height: max-content;
      }
      div.sub-heading {
        font-size: 2rem;
        color: #0047af;
        @media screen and (max-width: 768px) {
          font-size: 1.5rem;
        }
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
        @media screen and (max-width: 950px) {
          font-size: 0.9rem;
          line-height: 1.7;
          padding-right: 1rem;
        }
        @media screen and (max-width: 768px) {
          font-size: 0.8rem;
          line-height: 1.5;
          padding-right: 0.5rem;
        }
        @media screen and (max-width: 590px) {
          font-size: 0.9rem;
          line-height: 1.7;
        }
      }
      a {
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
          @media screen and (max-width: 950px) {
            margin: 1.5rem 0;
            padding: 0.8rem;
          }
          @media screen and (max-width: 768px) {
            padding: 0.5rem 0 0.5rem;
            margin-bottom: 0.5rem;
            height: 2.1rem;
            width: 10rem;
            font-size: 0.9rem;
          }
          &:hover {
            transform: scale(1.1);
          }

          text-decoration: none;
        }
      }
    }
    div.partner {
      padding: 3rem 1rem;
    }
    div.WhoWeAre__img.partner-img {
      @media screen and (max-width: 590px) {
        order: 2;
        margin: 0 2rem 0 0;
      }

      img {
        border: none;
        border-left: 3px solid #ffe401;
        margin-right: 1rem;
      }
    }
  }
`;
