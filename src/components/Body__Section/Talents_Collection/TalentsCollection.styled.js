import styled from "styled-components";

export const TalentCollectionWrapper = styled.div`
    padding: 6rem 5rem 0rem;

    @media screen and (max-width: 1100px){ 
        padding-inline:0;
    }

    div.content{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap:0;

        @media screen and (min-width: 1500px){ 
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        }

        @media screen and (max-width: 1400px){ 
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
        }
        @media screen and (max-width: 14001px){ 
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
        @media screen and (max-width: 760px){ 
            grid-template-columns: 1fr 1fr 1fr ;
        }
        @media screen and (max-width: 500px){ 
            grid-template-columns: 1fr 1fr;
        }
    }
        
    }
    .hire-btn{
          // margin: 1rem 0;
          background: #0047af;
          height: 3rem;
          border-radius: 4px;
          color: #fafafa;
          font-size: 1.05rem;
          padding-left: 15px;
          padding-right: 15px;
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
            font-size: 0.9rem;
          }
          &:hover {
            transform: scale(1.1);
          }

          text-decoration: none;
            margin-inline:auto;
            margin-top:2.5rem;
    }
`

export const TalentCardWrapper = styled.div`
    position:relative;
    width:auto;
    height:auto;

    img{
        height:100%;
        width: 100%;
        object-position:center;
        object-fit: cover;
        filter: brightness(0.85);
    }
    
    div.talent-info{
        height:25%;
        min-height:fit-content;
        width:100%;
        position:absolute;
        bottom:0;
        left:0;
        z-index:2;
        padding: 1rem;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.8) 90%);
        transition: all 0.3s ease-in-out;

        h6{
            font-size: 1.3rem;
            font-weight:300;
            color: white;

            @media screen and (max-width: 930px) {
                font-size: 1rem;
            }
        }
        p{
            font-size: 0.8rem;
            font-weight:400;
            color: rgb(220,220,220);
            
            @media screen and (max-width: 1200px) {
              font-size: 0.85rem;
            }
            @media screen and (max-width: 840px) {
              font-size: 0.75rem;
            }
            @media screen and (max-width: 590px) {
              font-size: 0.7rem;
            }

        }

        h6, p{
            transition:all 0.3s ease-in-out;
            transform:scale(1);

            text-shadow: 1px 1px 2px black;
        }
    }

    :hover > div.talent-info{
        height: 50%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 90%);

        h6{
            font-weight:600;
        }
    }

`