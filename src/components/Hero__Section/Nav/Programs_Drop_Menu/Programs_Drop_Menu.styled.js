import styled from "styled-components";

export const MenuWrapper = styled.div`
    background-color: white;
    height: fit-content;
    max-height: 80vh;
    width: 100%;
    padding: 4rem 5rem;
    display:flex;
    flex-wrap:wrap;
    gap:2rem;
    justify-content:space-between;
    position:absolute; 
    top:-90vh;
    left:0;
    transition: ease-in-out 0.5s;
    opacity: 0;
    z-index:-1;
    box-shadow: 0 -2px 16px 2px rgba(0,0,0,0.3);

    @media screen and (max-width: 1200px) {
      padding: 4rem 3rem;
    }

    @media screen and (max-width: 850px) {
      padding: 3rem 2rem;
    }
    @media screen and (max-width: 590px) {
      padding: 2rem 1rem;
    }

    .collection > h6{
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 2rem;
        color:#0047af
    }
        
    .collection:has(.main-collection) > .main-collection {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.5rem;
        @media screen and (max-width: 1380px) and (min-width:1200px) {
            grid-template-columns: 1fr 1fr;
        }
    }
    
`


export const CollectionWrapper = styled.div`
    .header{
        display:flex;
        align-items:center;
        gap: 0.5rem;
        color: #0047af;
        text-transform:capitalize;

        .icon{
            font-size: 1rem;
        }

        h6{
            font-size: 1rem;
            font-weight: medium;
        }
    }

    ul{
        list-style:none;
        padding-left: 1rem; 

        li{
            padding:0.5rem;
        }

        li a.program{
            font-size:1rem;
            display: block;
            text-decoration: none;
            color: #1A1A1A;
            font-weight: 400;
            transition: all 0.5s ease-in-out;
            border-bottom: 1px dashed transparent;
            width:fit-content;
        }

        li:hover a.program{
            border-bottom: 1px dashed;
            color: #000000;
            font-weight:400;
            transition: all 0.5s;
        }
    }
`