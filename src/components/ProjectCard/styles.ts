import styled  from "styled-components";



export const CardContainer = styled.header`
    display: flex;
    align-items: center;
    padding: 2.5rem 2.5rem 3rem 2.5rem;
    
    gap: 2.8rem;
    transform: scale(0.9);
    max-width: 34.4rem;
    height: 450px;

    flex-direction: column;
    transition: all .2s ease-in-out;

    background-color: rgba(60, 62, 65,0.175);
    color: #fff;

    -webkit-box-shadow: 0px 5px 21px -8px rgba(0,0,0,0.86); 
    box-shadow: 0px 5px 21px -8px rgba(0,0,0,0.86);

    border-radius: 2.5rem;

    &:hover {
        transform: scale(1);
    }

    img {
        width: 100%;
        height: 216px;
        border-radius: 2.5rem;
    }

    .card-info {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        h1 {
            font-size: 3.2rem;
            color: var(--blue-primary);
        }
        p {
            font-size: 1.8rem;
        }
    }

    .link-area {
        display: flex;
        width: 100%;
        gap: 3.2rem;
        a {
            font-size: 2.0rem;
            padding: 0.5rem 1.5rem;
            text-decoration: none;
            color: #fff;
        }
        a:hover {
        filter: brightness(0.8);
        }

        .visit-btn {
            padding: 0.5rem 1.5rem;
            background-color: var(--blue-primary);
            color: #fff;
            border-radius: 2.5rem;
        }
    }

    

`

