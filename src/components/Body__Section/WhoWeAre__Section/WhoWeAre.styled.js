import styled from "styled-components";

export const StyleWhoWeAre = styled.section`
  padding-top:5rem;
  padding: 2rem 3rem;
  background-color: #f1f4fb;
  @media screen and (min-width: 1500px){
    padding-inline: calc((100% - 1300px) / 2);
  }
  @media screen and (max-width: 1200px) {
    padding-top:5rem;
    padding: 2rem 1rem;
  }
  @media screen and (max-width: 850px) {
    padding-top:5rem;
    padding: 2rem 0;
  }
  div.heading {
    font-size: 3rem;
    font-weight: bold;
    position: relative;
    color: #0047af;
    // letter-spacing: 0.25rem;
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

  .sub-heading {
    font-family: "Host Grotesk";
  }

  div.container {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    margin-left: 2rem;

    &:nth-of-type(2){
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    div.WhoWeAre__img {
      // margin-top: 3rem;
      position: relative;
      @media screen and (max-width: 590px) {
        margin-right: 2rem;
      }
      img {
        display: block;
        // width: auto;
        height: 100%;
        width: 25rem;
        // object-fit: cover;
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
      height: auto;
      min-height: fit-content;
      padding: 1rem 1rem 2rem 4rem;
      display: flex;
      gap: 1rem;
      margin-block: 2.95rem;
      line-height: 1.9;
      letter-spacing: 0.05rem;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      @media screen and (max-width: 1200px) {
        height: auto;
      }
      @media screen and (max-width: 830px) {
        height: fit-content;
        line-height: 1.5;
      }
      @media screen and (max-width: 768px) {
        line-height: 1.3;
        margin: 0 2rem 0 0;
        padding: 2rem 1rem;
      }
      @media screen and (max-width: 590px) {
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
        color: #6b6b6b;
        line-height: 1.5;
        @media screen and (max-width: 1200px) {
          font-size: 1rem;
          // line-height: 1.9;
          padding-right: 1rem;
        }
        @media screen and (max-width: 950px) {
          font-size: 0.9rem;
          // line-height: 1.7;
          padding-right: 1rem;
        }
        @media screen and (max-width: 768px) {
          font-size: 0.8rem;
          // line-height: 1.5;
          padding-right: 0.5rem;
        }
        @media screen and (max-width: 590px) {
          font-size: 0.9rem;
          // line-height: 1.7;
        }
      }
      div.About__text-description > span {
        display: block;
        margin-bottom: 1rem;
      }
      div.About__text-description > span:last-child {
        margin-bottom: 0;
      }
      a {
        button {
          // margin: 1rem 0;
          background: #0047af;
          height: 3rem;
          width: 12rem;
          border-radius: 4px;
          color: #fafafa;
          font-size: 1.05rem;
          border: none;
          transition: transform 0.5s ease-in-out;
          cursor: pointer;
          // @media screen and (max-width: 1200px) {
          //   margin: 2rem 0;
          // }
          @media screen and (max-width: 950px) {
            // margin: 1.5rem 0;
            padding: 0.8rem;
          }
          @media screen and (max-width: 768px) {
            padding: 0.5rem 0 0.5rem;
            // margin-bottom: 0.5rem;
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

    div.About__text-content:nth-child(1) {
      border-right: 3px solid #ffe401;
      border-top: none;

      @media screen and (max-width: 768px) {
        padding-inline:2rem;
        border-top: 3px solid #ffe401;
        border-right: none;
        order: 2;
      }

      ul {
        margin-block: 1rem;
        list-style: none;
      }
    }
    div.About__text-content:nth-child(2) {
      border-left: 3px solid #ffe401;

      @media screen and (max-width: 768px) {
        border-left: none;
      }
    }

    div.partner {
      padding: 1rem 1rem 2rem;
    }
    div.WhoWeAre__img.partner-img {

      @media screen and (max-width: 768px) {
        padding-inline:1rem;
        order: 1;
        width: 100%;
        margin: 0 2rem 0 0;
      }
      span {
        @media screen and (max-width: 590px) {
          width: 100%;
          margin: 0 2rem 0 0;
        }
      }
      img {
        height: 100%;
        object-fit: cover;
        object-position: center;
        width: 25rem;
        border: none;
        // border-left: 3px solid #ffe401;
        margin-right: 1rem;

        @media screen and (max-width: 768px) {
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;
