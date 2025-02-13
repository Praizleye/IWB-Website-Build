import styled from "styled-components";

export const NavStyle = styled.div`
  position: sticky;
  top:0;
  width: 100%;
  height: fit-content;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 20px rgba(0, 71, 175, 0.1);
  z-index: 100;
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
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }

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
        // position: relative;
        margin-right: 1rem;
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;
        @media screen and (max-width: 1200px) {
          margin: 0;
        }


        a:not(.program) {
          text-decoration: none;
          color:rgba(7, 91, 160, 0.7);
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 0.25rem 0rem;
          position: relative;

          &:before {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: #0047af;
            transition: width 0.3s ease;
          }
          @media screen and (max-width: 1200px) {
            font-size: 0.9rem;
          }

          &:hover {
            color: #0047af;

            &:before {
              width: 100%;
            }
          }
        }

        // a.active {
        //     border-bottom-color: #0047af;
        // }


        :not(:nth-last-of-type(1)){
          padding-block: 1.5rem;
        }

        :has(.drop-menu-wrapper){
         :has(a:not(.program):hover), :has(.drop-menu-wrapper:hover){

            a:not(.program){
              border-bottom-color: #0047af;
            } 
            
            .drop-menu-wrapper{
              visibility:visible;
              top:calc(100% - 0.8rem);
              opacity:1;
            }
          }
        }

        a:not(.program).active {
          text-decoration: none;
          color: #0047af;
          font-weight: 600;

          &:before {
            width: 100%;
          }
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
    background: linear-gradient(135deg, #0047af, #075ba0);
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin-right: 4rem;
    transition: all 0.3s ease;
    transform-origin: center;

    &:hover {
      transform: translateY(-2px);
      background: linear-gradient(135deg, #075ba0, #0047af);
      box-shadow: 0 4px 15px rgba(0, 71, 175, 0.2);
    }

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
      color: #ffffff;;
      padding: 0.11rem 0.5rem 0 0.5rem;
      text-decoration: none;
      font-weight: 500;
      padding: 0 1rem;
      @media screen and (max-width: 990px) {
        font-size: 0.9rem;
      }

      &:hover:before {
        display: none;
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
    height: 30px;
    width: 30px;
    z-index: 1000;
    margin-top: 13px;

    svg {
      height: 2.25rem;
      width: 2.25rem;
      cursor: pointer;
      border-radius: 50%;
      border: 0.2rem solid #075aa0;
      padding: 0.5rem;
      color: #075aa0;
      background: white;
      transition: all 0.3s ease;
      box-shadow: 0 2px 10px rgba(0, 71, 175, 0.1);

      &:hover {
        transform: rotate(90deg);
        color: #0047af;
      }
    }

    .mobile-menu {
      position: fixed;
      top: 0;
      right: 0;
      width: 320px; // Increased from 280px
      height: auto;
      max-height: 480px; // Increased from 400px
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(10px);
      z-index: 999;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
      pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
      transition: all 0.3s ease-in-out;
      padding: 4.5rem 0 2.5rem 0; // Slightly more padding
      border-radius: 0 0 0 12px;
      box-shadow: -2px 2px 20px rgba(0, 71, 175, 0.1);

      .close-button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        cursor: pointer;

        svg {
          width: 1.5rem;
          height: 1.5rem;
          color: #075aa0;
          transition: all 0.3s ease;
          border: none;
          box-shadow: none;
          padding: 0;

          &:hover {
            color: #0047af;
            transform: rotate(90deg);
          }
        }
      }

      ul {
        width: 100%;
        padding: 0 2rem; // Increased from 1.5rem

        li {
          margin: 1.2rem 0; // Increased from 1rem
          opacity: 0;
          transform: translateY(20px);
          animation: slideIn 0.4s forwards;
          animation-delay: calc(var(--index) * 0.1s);

          a {
            font-size: 1.3rem; // Increased from 1.2rem
            color: #075aa0;
            text-decoration: none;
            transition: all 0.3s ease;
            padding: 0.5rem 0;
            position: relative;
            display: inline-block;

            &:after {
              content: "";
              position: absolute;
              width: 0;
              height: 2px;
              bottom: 0;
              left: 0;
              background: linear-gradient(to right, #0047af, #075ba0);
              transition: width 0.3s ease;
            }

            &:hover {
              color: #0047af;
              padding-left: 1rem;

              &:after {
                width: 100%;
              }
            }

            &.active {
              color: #0047af;
              font-weight: 600;

              &:after {
                width: 100%;
              }
            }
          }
        }
      }
    }

    @keyframes slideIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media screen and (min-width: 761px) {
      display: none;
    }
  }
`;
