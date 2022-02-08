import styled  from "styled-components";



export const CardContainer = styled.header`
    display: flex;
    align-items: center;
    padding: 2.5rem 2.5rem 3rem 2.5rem;
    
    gap: 1.6rem;

    width: 350px;
    height: 450px;

    flex-direction: column;

    background-color: rgba(60, 62, 65,0.175);
    color: #fff;

    border-radius: 2.5rem;

    img {
        width: 100%;
        height: 220px;
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
            font-size: 1.6rem;
        }
    }

    

`

