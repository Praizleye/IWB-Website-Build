import styled from "styled-components";

export const NavStyle = styled.div`
  position: sticky;
  top:0;
  width: 100%;
  height: fit-content;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 10;
  .app__navbar {
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    padding: 0 1rem;

    @media screen and (max-width: 760px) {
      padding-block: 1rem;
    }

    .app__navbar-logo {
      flex: 1;
      padding-left: 4rem;
      @media screen and (max-width: 1200px) {
        padding-left: 2rem;s
      }
      @media screen and (max-width: 960px) {
        padding-left: 2rem;
      }
      @media screen and (max-width: 850px) {
        padding-left: 1rem;
      }
      img {
        height: 2.3rem;
        width: auto;
        color: white;
        width: auto;
        margin-right: 4rem;

        @media screen and (max-width: 1200px) {
          height: 2.1rem;
        }
        @media screen and (max-width: 960px) {
          margin-right: 2.5rem;
        }
        @media screen and (max-width: 760px) {
          height: 1.8rem;
        }
      }
    }

    ul.app__navbar-links {
      display: flex;
      align-items:center;

      li.nav-link {
        display:block;
        margin-right: 1rem;
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 1200px) {
          margin: 0;
        }
        a:not(.program) {
          text-decoration: none;
          color:rgba(7, 91, 160, 0.7);
          border-bottom:  2px solid transparent;
          @media screen and (max-width: 1200px) {
            font-size: 0.9rem;
          }

          &:hover {
            border-bottom-color: #0047af;
          }
        }

        :not(:nth-last-of-type(1)){
          padding-block: 1.5rem;
        }

        :has(.drop-menu-wrapper){
         :has(a:not(.program):hover), :has(.drop-menu-wrapper:hover){

            a:not(.program){
              border-bottom-color: #0047af;
            } 
            
            .drop-menu-wrapper{
              top:100%;
              opacity:1;
            }
          }
        }

        a:not(.program).active {
          text-decoration: none;
          color: #0047af;
          
        }
      }

      @media screen and (max-width: 760px) {
        display: none;
      }
    }
  }
  ul.app__navbar-links > li.nav-link:nth-of-type(1),
  ul.app__navbar-links > li.nav-link:nth-of-type(2),
  ul.app__navbar-links > li.nav-link:nth-of-type(3),
  ul.app__navbar-links > li.nav-link:nth-of-type(4),
  ul.app__navbar-links > li.nav-link:nth-of-type(5) {
    margin-right: 3rem;
    @media screen and (max-width: 1200px) {
      margin-right: 2rem;
    }
    @media screen and (max-width: 1026px) {
      margin-right: 1.5rem;
    }
    @media screen and (max-width: 780px) {
      margin-right: 1rem;
    }
  }
  ul.app__navbar-links > li.nav-link:nth-last-of-type(1) {
    background: #0047af;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin-right: 4rem;

    @media screen and (max-width: 1200px) {
      margin-right: 2rem;
      height: 2.5rem;
      margin-top: 0.25rem;
    }
    @media screen and (max-width: 990px) {
      margin-right: 1rem;
    }
    @media screen and (max-width: 780px) {
      margin-right: 0.5rem;
    }
    a:not(.program) {
      color: #fafafa;
      padding: 0.11rem 0.5rem 0 0.5rem;
      text-decoration: none;
      font-weight: 500;
      padding: 0 1rem;
      @media screen and (max-width: 990px) {
        font-size: 0.9rem;
      }

      :hover {
        border: none;
      }
    }

  }
  ul.app__navbar-links li.nav-link:nth-last-of-type(2) {
    background: transparent;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin-right: 2rem;

    @media screen and (max-width: 1200px) {
      height: 2.5rem;
      margin-top: 0.25rem;
    }
    @media screen and (max-width: 990px) {
      margin-right: 1rem;
    }
    @media screen and (max-width: 930px) {
      display: none;
    }

    a {
      font-weight: bold;
      padding: 0.11rem 1rem 0 1rem;
      font-weight: 400;
      :hover {
        border: none;
      }
    }
  }
`;

export const NavMenuBar = styled.div`
  .app__navbar-menu {
    position: fixed;
    left:calc(100% - 50px - 1rem);
    top:0;
    height: 50px;
    width: 50px;
    z-index: 10;
    margin-top: 13px;

    svg {
      height: 3rem;
      width: 3rem;
      cursor: pointer;
      border-radius: 50%;
      border: 0.2rem solid white;
      padding: 0.5rem;
      @media screen and (max-width: 500px) {
        height: 2.6rem;
        width: 2.6rem;
      }
    }
    ul {
      height: 60vh;
      width: 25rem;
      position: absolute;
      border-radius: 4px;
      right: -27%;
      top: 50px;
      z-index: -10;
      display: flex;
      flex-direction: column;
      padding: 4rem 2rem;
      justify-content: space-evenly;
      backdrop-filter: blur(5px);
      opacity: 0.97;
      background: #fff;
      @media screen and (max-width: 590px) {
        width: 20rem;
      }
      @media screen and (max-width: 480px) {
        width: 17rem;
      }
      li {
        list-style: none;
        font-size: 1.1rem;
        cursor: pointer;
        margin-left: 3.5rem;
        color: #075aa0;
        @media screen and (max-width: 570px) {
          margin-left: 2rem;
        }
        @media screen and (max-width: 470px) {
          margin-left: 1rem;
        }
        @media screen and (max-width: 420px) {
          margin-left: 0.5rem;
        }
        @media screen and (max-width: 370px) {
          margin-left: 0;
        }
        a {
          text-decoration: none;
          color: #075aa0;

          &:hover {
            color: #ffe401;
            border-bottom: 1px solid #075aa0;
          }
        }
      }
    }
    @media screen and (min-width: 761px) {
      display: none;
    }
  }
`;
