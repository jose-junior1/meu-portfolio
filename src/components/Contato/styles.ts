import styled from "styled-components";

export const ContainerContato = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: #1b1a1aff;
    color: #f1f1f1;
    text-align: center;
`

export const Content = styled.div`
    margin: 0 auto;
    width: 800px;

    h2 {
        font-size: 40px;
    }

    a {
        display: flex;
        align-items: center;
        gap: 30px;
        padding: 24px;
        background-color: #242323ff;
        margin-bottom: 20px;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: scale(1.02);
        }

        img {
            height: 40px;
            width: 40px;
        }
    }
`