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
    overflow-y: auto;
    margin-top: 140px;
    margin-bottom: 100px;

    h2 {
        border-bottom: 2px solid #00BCD4;
        padding-bottom: 10px;
        text-align: left;
    }
`

export const Content = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
`