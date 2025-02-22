import styled from "styled-components";

export const MenuWrapper = styled.div`
    background-color: white;
    height: fit-content;
    max-height: 80vh;
    width: fit-content;
    max-width:100vw;
    box-sizing:content-box;
    text-wrap:nowrap;
    padding: 2rem 3rem;
    display:flex;
    flex-wrap:wrap;
    gap:2rem;
    justify-content:space-between;
    position:absolute; 
    /* relative to navbar */
    top:90%;
    right:0;
    transition: ease-in-out 0.5s;
    opacity: 0;
    z-index:1;
    border-radius:0.25rem;
    box-shadow:  -3px 20px 20px rgba(0,0,0,0.1);

    @media screen and (max-width: 1200px) {
      padding: 4rem 3rem;
    }

    @media screen and (max-width: 1060px) and (min-width:760px) {
        width: calc(100vw - 6rem );
        right: 0;
    }

    @media screen and (max-width: 760px) {
        opacity:1;
        flex-direction:column;
        width:fit-content !important;
        height:100vh !important;
        max-height:100vh;
        right: -100vw;
        top: 100%;
        box-shadow:unset;
        width: fit-content;
        z-index:1000;
        padding: 2rem 1rem;

        &.active{
            right: -3rem;
        }
    }

    .collection > h6{
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 2rem;
        color:#0047af
    }
        
    .collection:has(.main-collection) > .main-collection {
        display: grid;
        grid-template-columns: 1fr 1fr;
        
        gap: 1.5rem;
        // @media screen and (max-width: 1380px) and (min-width:1200px) {
        //     grid-template-columns: 1fr 1fr;
        // }
        @media screen and (max-width:760px) {
            grid-template-columns:1fr;
        }

        @media screen and (min-width: 1380px) {
            grid-template-columns: 1fr 1fr 1fr;
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
            padding:0.25rem;
        }

        li a.program{
            font-size:1rem;
            display: block;
            text-decoration: none;
            color: #1A1A1A;
            font-weight: 300;
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