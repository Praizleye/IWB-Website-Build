import styled from "styled-components";

export const StyleCompTrust = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 5rem;
  background: #fff;
  flex-wrap: nowrap;
  @media screen and (max-width: 1200px) {
    padding: 1rem 3rem;
  }
  @media screen and (max-width: 850px) {
    justify-content: center;
    flex-wrap: wrap;
    padding: 0.5rem 2rem;
  }
  @media screen and (max-width: 590px) {
    padding-inline: 1rem;
  }

  div.Footer__heading {
    font-size: 2rem;
    padding-right: 4rem;
    color: #fff;
    -webkit-text-stroke-width: 0.86px;
    -webkit-text-stroke-color: #0047af;
    @media screen and (max-width: 1200px) {
      width: max-content;
    }
    @media screen and (max-width: 910px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 700px) {
      font-size: 1.2rem;
      padding-right: 2rem;
    }
    @media screen and (max-width: 590px) {
      font-size: 0.9rem;
      padding-right: 1rem;
    }
    @media screen and (max-width: 380px) {
      font-size: 0.8rem;
    }
    span {
      display: block;
      width: max-content;
    }
  }
  div:nth-of-type(2) {
    max-width: 4rem;
    border-radius: 20px;
    height: 2.5px;
    background: #e7e6e6;
    justify-self: flex-start;
  }
  // div.companies__logo {
  //   img {
  //     height: 11.25rem;
  //     width: auto;
  //     @media screen and (max-width: 1200px) {
  //       height: 9.25rem;
  //     }
  //     @media screen and (max-width: 910px) {
  //       height: 8.25rem;
  //     }
  //     @media screen and (max-width: 590px) {
  //       height: 6.25rem;
  //     }
  //     @media screen and (max-width: 380px) {
  //       height: 5.25rem;
  //     }
  //     @media screen and (max-width: 337px) {
  //       height: 4.75rem;
  //     }
  //   }
  // }
  div.divider {
    width: 2.5px;
    min-width:2.5px;
    height: 8rem;
    border-radius: 12px;
    @media screen and (max-width: 910px) {
      height: 6.5rem;
    }
    @media screen and (max-width: 700px) {
      height: 3.5rem;
    }
    background: #e7e6e6;
  }
  div.companies__logo {
    padding: 0 3rem;
    @media screen and (max-width: 700px) {
      padding: 0 2rem;
    }
    @media screen and (max-width: 590px) {
      padding: 0 1.5rem;
    }
    @media screen and (max-width: 410px) {
      padding: 0 1rem;
    }
    img {
      height: 5rem;
      width: auto;
      @media screen and (max-width: 1200px) {
        height: 4rem;
      }
      @media screen and (max-width: 910px) {
        height: 3rem;
      }
      @media screen and (max-width: 700px) {
        height: 2rem;
      }
      @media screen and (max-width: 590px) {
        height: 1.5rem;
      }
      @media screen and (max-width: 380px) {
        height: 1.5rem;
      }
      @media screen and (max-width: 337px) {
        height: 1.25rem;
      }
    }
  }
`;
