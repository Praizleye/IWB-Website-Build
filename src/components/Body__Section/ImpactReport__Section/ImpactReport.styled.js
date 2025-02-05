import styled from "styled-components";

export const StyleImpactReport = styled.div`
  margin: 5rem 0 2rem;
  padding: 3rem 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;

  @media screen and (max-width: 1200px) {
    padding: 3rem 3rem;
  }
  @media screen and (max-width: 760px) {
    padding: 2rem 1rem;
  }
  @media screen and (max-width: 590px) {
    padding: 2rem 1rem 6rem;
  }
  div.ImpactReport__heading {
    font-size: 3rem;
    font-weight: 600;
    color: #065a8a;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 1200px) {
      font-size: 2.5rem;
    }
    @media screen and (max-width: 590px) {
      font-size: 2rem;
      width: 100%;
    }

    img {
      display: block;
      align-self: start;
      margin-left: 11.5rem;
      @media screen and (max-width: 1200px) {
        margin-left: 7rem;
      }
      @media screen and (max-width: 590px) {
        margin-left: 5rem;
      }
      @media screen and (max-width: 450px) {
        margin-left: 4rem;
      }
    }
    div {
      font-size: 24px;
      color: #595b60;
      font-weight: 300;
      margin-top: 0.5rem;
      @media screen and (max-width: 1200px) {
        font-size: 18px;
      }
      @media screen and (max-width: 590px) {
        font-size: 14px;
      }
      @media screen and (max-width: 450px) {
        display: none;
      }
    }
  }
  div.sectionReport__1 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1.5rem;
    column-gap: 1.5rem;
    width: 100%;
    @media screen and (max-width: 850px) {
      grid-template-columns: repeat(2, auto);
      justify-content: space-evenly;
    }
    @media screen and (max-width: 590px) {
      grid-template-columns: repeat(1, auto);
      justify-content: space-evenly;
      grid-gap: 0;
      margin-top: 2rem;
    }

    div.subSectionReport__1,
    div.subSectionReport__2,
    div.subSectionReport__3,
    div.subSectionReport__4,
    div.subSectionReport__5,
    div.subSectionReport__6 {
      width: 23rem;
      height: 19rem;
      padding-block:1rem;
      box-sizing:content-box;
      box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
        rgba(17, 17, 26, 0.05) 0px 8px 32px;
      margin: 2rem 0;
      @media screen and (max-width: 1200px) {
        height: 20rem;
        width: 19rem;
      }
      @media screen and (max-width: 1050px) {
        height: 18rem;
        width: 17rem;
      }
      @media screen and (max-width: 970px) {
        height: 16rem;
        width: 15rem;
      }
      @media screen and (max-width: 850px) {
        height: 19rem;
        width: 17rem;
      }
      @media screen and (max-width: 650px) {
        height: 16rem;
        width: 15rem;
      }
      @media screen and (max-width: 590px) {
        height: 18rem;
        width: 19rem;
        margin: 1rem 0;
      }
      @media screen and (max-width: 416px) {
        height: 16rem;
        width: 15rem;
        margin: 1rem 0;
      }
      div.subSectionReport__icon {
        padding: 1rem 3rem 2rem 3rem;
        @media screen and (max-width: 1200px) {
          padding: 1rem 2rem 2rem 2rem;
        }
        @media screen and (max-width: 850px) {
          padding: 1rem 2rem 2rem 2rem;
        }
        @media screen and (max-width: 590px) {
          padding: 1rem 1rem 2rem 1rem;
        }
        img {
          height: 3.5rem;
          width: auto;
          @media screen and (max-width: 1200px) {
            height: 2.7rem;
          }
          @media screen and (max-width: 970px) {
            height: 2rem;
          }
          @media screen and (max-width: 590px) {
            height: 3rem;
          }
          @media screen and (max-width: 416px) {
            height: 1.5rem;
          }
        }
        div.subSectionReport__figure {
          padding-top: 1rem;
          font-size: 1.3rem;
          font-weight: 500;
          @media screen and (max-width: 1200px) {
            font-size: 1.1rem;
          }
          @media screen and (max-width: 970px) {
            font-size: 0.9rem;
          }
          @media screen and (max-width: 590px) {
            font-size: 1.3rem;
          }
          @media screen and (max-width: 416px) {
            font-size: 1rem;
          }
          // img {
          //   height: 1.7rem;
          //   width: auto;
          //   @media screen and (max-width: 1200px) {
          //     height: 1.5rem;
          //   }
          //   @media screen and (max-width: 970px) {
          //     height: 1.1rem;
          //   }
          //   @media screen and (max-width: 870px) {
          //     height: 1.5rem;
          //   }
          //   @media screen and (max-width: 590px) {
          //     height: 2rem;
          //     width: auto;
          //   }
          //   @media screen and (max-width: 416px) {
          //     height: 1.5rem;
          //     width: auto;
          //   }
          // }
        }
      }
      div.subSectionReport__text {
        color: #747779;
        font-size: 1.2rem;
        padding: 0 3rem 2rem 3rem;
        justify-self: center;
        align-self: center;
        height: 8rem;
        @media screen and (max-width: 1200px) {
          font-size: 1.1rem;
          line-height: 1.4;
          padding: 0 2rem 2rem 2rem;
          height: 7rem;
          margin-bottom: 2rem;
        }
        @media screen and (max-width: 970px) {
          font-size: 1rem;
          line-height: 1.2;
          padding: 0 2rem 2rem 2rem;
          height: 7rem;
          margin-bottom: 2rem;
        }
        @media screen and (max-width: 870px) {
          font-size: 1.2rem;
          padding: 0 2rem 2rem 2rem;
          height: 7rem;
          margin-bottom: 2rem;
        }
        @media screen and (max-width: 650px) {
          font-size: 0.9rem;
          padding: 0 1rem 2rem 1rem;
          height: 7rem;
          margin-bottom: 2rem;
        }
        @media screen and (max-width: 590px) {
          font-size: 1.15rem;
          padding: 0 1rem 2rem 1rem;
          height: 7rem;
          margin-bottom: 2rem;
        }
        @media screen and (max-width: 416px) {
          font-size: 1rem;
          padding: 0 1rem 2rem 1rem;
          height: 7rem;
          margin-bottom: 2rem;
        }
      }
    }
  }
`;
