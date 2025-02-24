import styled from "styled-components";

export const StyleOurInterest = styled.section`
  background-color: #000000;
  padding-top: 7rem;

  div.heading-wrapper,
  div.Ourinterest-body {
    padding: 2.5rem 3rem;
    @media screen and (max-width: 1200px) {
      padding-inline: 2rem;
    }
    @media screen and (max-width: 850px) {
      padding-inline: 2rem;
    }
    @media screen and (max-width: 850px) {
      padding-inline: 1rem;
    }
  }
  div.heading-wrapper {
    padding-block: 0;
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
      margin-left: 0;
    }
    @media screen and (max-width: 590px) {
      font-size: 2rem;
      padding-left: 1rem;
      margin-left: 1rem;
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
  div.Ourinterest-body.container {
    background-color: #000000;
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;

    @media screen and (max-width: 590px) {
      flex-direction: column;
      padding-bottom: 7rem;
    }
    div.Ourinterest-img {
      img {
        width: 40rem;
        height: 42rem;
        object-fit: cover;
        object-position: 50%;
        @media screen and (max-width: 1200px) {
          width: 32rem;
          height: 35rem;
        }
        @media screen and (max-width: 930px) {
          width: 23rem;
          height: 30rem;
        }
        @media screen and (max-width: 760px) {
          width: 20rem;
          height: 25rem;
        }
        @media screen and (max-width: 650px) {
          width: 18rem;
          height: 25rem;
        }
        @media screen and (max-width: 620px) {
          width: 16rem;
          height: 25rem;
        }
        @media screen and (max-width: 590px) {
          width: 100%;
          height: auto;
          margin-bottom: 1rem;
        }
      }
    }
    div.Ourinterests-sections.container {
      /* background: #0047af; */
      height: fit-content;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      margin-left: 3rem;
      // @media screen and (max-width: 1200px) {
      //   // height: 28rem;
      // }
      @media screen and (max-width: 930px) {
        // height: 23rem;
        margin-left: 2rem;
      }
      @media screen and (max-width: 700px) {
        margin-left: 1rem;
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
        // height: 100%;
        margin: 0.2rem 0;
        border-left: 3px solid #b8b8b8;
        transition: ease-in-out all 0.5s;
        @media screen and (max-width: 700px) {
          padding-left: 1rem;
        }
        div.subheading.active {
          color: #fafafa;
          background: #2f88ff;
          height: 2.5rem;
          padding: 0.2rem 0.5rem;
          font-size: 1.5rem;
          @media screen and (max-width: 930px) {
            font-size: 1.2rem;
            padding: 0.2rem 0.25rem;
            height: 2rem;
          }
          @media screen and (max-width: 650px) {
            font-size: 1rem;
            padding: 0.2rem 0.25rem;
            height: 2rem;
          }
        }
        div.subheading {
          font-size: 1.3rem;
          font-weight: 500;
          color: #676464;
          transition: ease-in-out all 0.5s;
          @media screen and (max-width: 930px) {
            font-size: 1rem;
            padding: 0.1rem 0.15rem;
          }
        }
        div.textDesc {
          font-size: 1.1rem;
          color: #676464;
          padding-top: 1rem;
          transition: ease-in-out all 0.5s;
          @media screen and (max-width: 1200px) {
            font-size: 1rem;
          }
          @media screen and (max-width: 930px) {
            font-size: 0.9rem;
            padding: 0.5rem 0;
          }
          @media screen and (max-width: 840px) {
            font-size: 0.85rem;
            padding: 0.25rem 0;
          }
          @media screen and (max-width: 590px) {
            font-size: 0.9rem;
            padding: 0.25rem 0;
          }
        }
        div.textDesc.active {
          color: #ffffff;
        }
      }
    }
  }
`;
