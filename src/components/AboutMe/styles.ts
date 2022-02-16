import styled  from "styled-components";



export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    color: #fff;

    background-color: var(--dark-100);

    

`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 1444px;
    padding: 9.5rem 0;
    gap: 6.4rem;


    

    @media(max-width: 1080px) {
            flex-direction: column;
        }

    

    font-size: 1.6rem;

   
    
    #about-bio  {
        h1 {
        text-align: center;
        font-size: 4.8rem;
        }

        .title-about{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.6rem;

        

    }

    }

    #about-bio p {
        margin: 15px 0px;
        font-size: 1.8rem;
    }

    

    img {
        width: 300px;
        border: 5px solid gray;
        border-radius: 50%;
    }

    
    
    `