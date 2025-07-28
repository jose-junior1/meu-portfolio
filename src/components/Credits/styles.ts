import styled from "styled-components";
import { breakpoints } from "../../styles/responsive";

export const ContainerCredits = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);

    ${breakpoints.mobile`
        padding: 24px;
    `}
`

export const ContainerText = styled.div`
    max-width: 600px;
    width: 100%;
    margin: 0 auto;

    p {
        color: #f2f2f2;
        text-align: justify;
        font-size: 18px;
        line-height: 30px;
    }

    h3 {
        color: #f2f2f2;
        border-bottom: 2px solid #00BCD4;
        margin: 30px auto 0 auto;
        padding-bottom: 10px;
        font-size: 22px;
    }

    .livro {
        color: #DCDCDC;
    }

    ${breakpoints.mobile`
        p {
            line-height: 20px;
        }
    `}
`

export const Citacao = styled.blockquote`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 300px;
    gap: 28px;
    padding: 30px;
    color: aliceblue;
    font-family: "EB Garamond", serif;
    font-size: 24px;
    position: relative;

    &::before {
        position: absolute;
        content: "✦";
        font-size: 18px;
        color: #f2f2f2;
        right: 0;
        top: 10px;
    }

    .livro {
        text-decoration: underline;
        font-weight: bold;
    }
`

export const Tecnologies = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 10px;
    padding-bottom: 16px;
    margin: 16px auto 30px auto;
    border-bottom: 2px solid #00BCD4;
    a {
        transition: transform 0.3s ease-in-out;
        
        &:hover {
            transform: scale(1.05);
        }
    }
    
    img, .react-scroll {
        height: 80px;
        width: 80px;
        border-radius: 8px;
    }

    .react, .styled-icon, .react-router, .git {
        padding: 8px;
    }

    .react {
        border: 1px solid #00BFFF;
        background-color: rgba(0,0,0,1);
    }

    .styled-icon, .react-router {
        background-color: #DCDCDC;
    }

    .react-scroll {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        background-color: #363636;
        font-size: 16px;
    }

    .firstName {
        color: #DCDCDC;
    }

    .git {
        border: 1px solid #FF4500;
        background-color: rgba(0,0,0,1);
    }

    ${breakpoints.mobile`
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        img, .react-scroll {
            width: 60px;
            height: 60px;
        }

        .react-scroll{
            margin: 0 auto;
        }
    `}
`