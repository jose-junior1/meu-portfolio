import styled from "styled-components";

export const ContainerSobre = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #1b1a1aff;
    color: #f1f1f1;

    h2 {
        font-size: 34px;
        text-transform: uppercase;
        margin-bottom: 40px;
    }
`

export const ContainerTexto = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    text-align: justify;
    
    div {
        position: relative;
        padding: 24px;
        
        &::before, &::after {
            content: '';
            position: absolute;
            width: 80px; 
            height: 80px;
            border: 2px solid #00BCD4;
        }
        
        &::before {
            top: 0;
            left: 0;
            border-right: none;
            border-bottom: none;
        }
        
        &::after {
            bottom: 0;
            right: 0;
            border-left: none;
            border-top: none;
        }

        span {
            color: #00BCD4;
            font-weight: bold;
        }
    }

    p {
        color: #e0e0e0;
        line-height: 36px;
        margin-bottom: 30px;
        word-spacing: 6px;
        font-size: 18px;
    }
`