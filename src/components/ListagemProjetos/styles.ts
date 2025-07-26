import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    color: #f1f1f1;
    position: relative;
    overflow-y: hidden;
    padding: 100px 0;

    h2 {
        border-bottom: 2px solid #00BCD4;
        padding-bottom: 10px;
        text-align: left;
    }
`

export const Content = styled.div`
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
`

export const BtnGitHub = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:400px;
    background-color: #0a0a0aff;
    border: 2px solid black;
    padding: 16px;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    img {
        height: 30px;
    }
`