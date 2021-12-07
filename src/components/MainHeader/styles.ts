import styled  from "styled-components";



export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    //background-color: #3c3e41;
    background-color: rgba(60, 62, 65,0.05);
    

    font-size: 1.6rem;

`

export const Content = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 35px;
    width: 90%;
    max-width: 1444px;


    #top-header-logo h1 {
        font-size: 2.2em;

        span:nth-child(1) {
            color: rgb(21, 216, 79);
        }

        span:nth-child(2) {
            color: rgb(240, 206, 13);
        }

        span:nth-child(3) {
            color: rgb(31, 120, 180);
        }
    }



    #hambtn {
        display: none;

        .hambtn-bar {
            width: 40px;
            border-radius: 20px;
            background-color: white;
            height: 4px;
            margin: 6px;
        }

    }

    #navbar  li {
    
        display: inline;
        margin: 0px 10px;

    }

    .navtop-link {
        font-size: 2.0rem;
        color: honeydew;
        text-decoration: none;
        text-transform: capitalize;
        padding: 5px;

        &:hover{
            color: var(--blue-primary) ;
        }
        
    }

    @media (max-width: 500px) {
            #navbar{
                display: none;
            }

            #hambtn {
                display: inline;
            }
        }

    
               
    `