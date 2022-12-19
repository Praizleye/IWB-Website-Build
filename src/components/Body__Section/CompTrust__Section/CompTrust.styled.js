import styled from "styled-components";

export const StyleCompTrust = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 5rem;
  background: #fff;
  @media screen and (max-width: 1200px) {
    padding: 1rem 3rem;
  }
  @media screen and (max-width: 850px) {
    padding: 0.5rem 2rem;
  }
  @media screen and (max-width: 590px) {
    padding: 0 1rem;
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
    span {
      display: block;
      width: max-content;
    }
  }
  div:nth-of-type(2) {
    width: 12rem;
    border-radius: 20px;
    height: 3px;
    background: #e7e6e6;
    justify-self: flex-start;
  }
  div:nth-of-type(3) {
    /* padding: 0px 60px; */

    img {
      height: 11.25rem;
      width: auto;
      @media screen and (max-width: 1200px) {
        height: 9.25rem;
      }
      @media screen and (max-width: 910px) {
        height: 8.25rem;
      }
      @media screen and (max-width: 590px) {
        height: 6.25rem;
      }
    }
  }
  div:nth-of-type(4),
  div:nth-of-type(6) {
    width: 4px;
    height: 8rem;
    border-radius: 12px;
    @media screen and (max-width: 910px) {
      height: 6.5rem;
    }
    @media screen and (max-width: 700px) {
      height: 5.5rem;
    }
    background: #e7e6e6;
  }
  div:nth-of-type(5),
  div:nth-of-type(7) {
    padding: 0 3rem;
    @media screen and (max-width: 700px) {
      padding: 0 2rem;
    }
    @media screen and (max-width: 590px) {
      padding: 0 1.5rem;
    }
    img {
      height: 6.875rem;
      width: auto;
      @media screen and (max-width: 1200px) {
        height: 4.875rem;
      }
      @media screen and (max-width: 910px) {
        height: 3.875rem;
      }
      @media screen and (max-width: 700px) {
        height: 3rem;
      }
      @media screen and (max-width: 590px) {
        height: 2.5rem;
      }
    }
  }
`;
