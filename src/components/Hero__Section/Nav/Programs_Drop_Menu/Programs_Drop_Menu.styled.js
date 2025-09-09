import styled from "styled-components";

export const MenuWrapper = styled.div`
/* relative to navbar */
top: 90%;
position:absolute;
right: 0;
transition: ease-in-out 0.5s;
opacity: 0;
z-index: -1;
padding-top:2rem;
display: none;

.main-container{
    box-shadow: -3px 20px 20px rgba(0, 0, 0, 0.2);
    background-color: white;
    height: fit-content;
    max-height: 80vh;
    width: fit-content;
    max-width: 100vw;
    box-sizing: content-box;
    text-wrap: nowrap;
    padding: 1rem 0rem;
    flex-wrap: wrap;
    display:flex;
    flex-direction:column;
      h6 {
        font-size: 1.05rem;
        font-weight: medium;
        font-family:"Host Grotesk"
      }

      .header {
        padding:0.5rem 1.5rem;
        h6{
          width:full;
          display:flex;
          align-items:center;
          justify-content: space-between;
          gap:2.5rem;
          }
          &:hover{ 
            background-color:rgb(240,240,240);
            color: #0047af;
          .mini-menu{
            visibility:visible;
            transition: all 300ms;
          }
      }

      @media screen and (max-width: 1200px) {
        padding: 4rem 3rem;
      }

      @media screen and (max-width: 1060px) and (min-width: 760px) {
        width: calc(100vw - 6rem);
        right: 0;
      }

      @media screen and (max-width: 760px) {
        opacity: 1;
        flex-direction: column;
        width: fit-content !important;
        height: 100vh !important;
        max-height: 100vh;
        display: flex;
        right: -100vw;
        top: 0;
        box-shadow: unset;
        z-index: 1;
        padding: 4rem 1.5rem;

        &.active {
          right: 0;
          top: 0;
        }
      }

      .collection {
      a {
        font-size: 1rem;
        display: block;
        text-decoration: none;
        color: #1a1a1a;
        font-weight: 300;
        transition: all 0.5s ease-in-out;
        text-decoration:none;
        width: fit-content;
        }

        a:hover {
          text-decoration: underline;
        color: #000000;
        font-weight: 400;
        transition: all 0.5s;
        }
        }

      .collection {
        display: grid;
        grid-template-columns: 1fr 1fr;

        gap: 1.5rem;
        // @media screen and (max-width: 1380px) and (min-width:1200px) {
          //     grid-template-columns: 1fr 1fr;
        // }
        @media screen and (max-width: 760px) {
          grid-template-columns: 1fr;
        }

        @media screen and (min-width: 1380px) {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
  }
    .mini-menu{
      position:absolute;
      top:2rem;
      left:100%;
      visibility:hidden;
      transition: all 300ms;
      width:fit-content;
      padding: 1rem;
      background-color:rgb(240,240,240);
    }
  `;

export const CollectionWrapper = styled.div`

  .header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #0047af;
    text-transform: capitalize;

    .icon {
      font-size: 1rem;
    }

    h6 {
      font-size: 1rem;
      font-weight: medium;
    }
  }

  ul {
    list-style: none;
    padding-left: 1rem;

    li {
      padding: 0.25rem;

      a.program {
        font-size: 1rem;
        display: block;
        text-decoration: none;
        color: #1a1a1a;
        font-weight: 300;
        transition: all 0.5s ease-in-out;
        width: fit-content;
      }

      &:hover a.program {
        color: #000000;
        font-weight: 400;
        transition: all 0.5s;
      }
    }
  }
`;
