import styled from "styled-components";
import { breakpoints } from "../../styles/responsive";

export const ContainerContato = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0;
    width: 100%;
    height: 100vh;
    background-color: #1b1a1aff;
    color: #f1f1f1;
    text-align: center;

    ${breakpoints.mobile`
        padding: 0 16px;
    `}

    ${breakpoints.tablet`
        padding: 0 16px;
    `}
`

export const SelectFormContact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding-bottom: 50px;

    p {
        color: rgba(255, 255, 255, 0.8);
    }

    div {
        display: flex;
        justify-content: center;
        gap: 10px;

        button {
            padding: 10px;
            border-radius: 8px;
            border: none;
            background-color: #5e5d5dff;
            color: #f1f1f1;
    
            &.is-active {
                background-color: #017786ff;
                font-weight: bold;
            }
    
        }
    }

    ${breakpoints.mobile`
        gap: 10px;

        button {
            width: 100%;
        }
    `}
`

export const FormContact = styled.form`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    button {
        height: 32px;
        width: 100%;
        border-radius: 6px;
        background-color: #21613c;
        color: #f1f1f1;
        border: 1px solid transparent;

        &:hover {
            border-color: #21613c;
            background-color: transparent;
        }
    }
`

export const BlockContact = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;

    input,
    textarea {
        border-radius: 6px;
        outline: none;
    }

    input:focus,
    textarea:focus {
        border-color: #00BCD4;
    }

    input {
        height: 32px;
        padding: 0 16px;
        border: none;
        border-bottom: 2px solid #c1c1c1;
        background-color: #2b2929ff;
        color: #c5c5c5;
        font-size: 18px;
    }

    textarea {
        max-width: 100%;
        width: 100%;
        field-sizing: content;
        resize: none;
        min-height: 80px;
        max-height: 300px;
        overflow-y: auto;
        padding: 16px;
        font-size: 18px;
        background-color: #2b2929ff;
        color: #c5c5c5;
        border: 1px solid #c1c1c1;

        ${breakpoints.mobile`
            max-height: 180px;
        `}

        ${breakpoints.tablet`
            max-height: 220px;
        `}
    }
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    a {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        padding: 24px;
        background-color: #242323ff;
        font-size: 18px;
        border-radius: 8px;
        max-width: 800px;
        width: 100%;
        margin: 0 auto;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
        border: 1px solid transparent;

        &:hover {
            transform: scale(1.02);
            border: 1px solid #00BCD4;
        }

        img {
            height: 40px;
            width: 40px;
            position: absolute;
            left: 16px;
        }
    }

    ${breakpoints.mobile`
        width: 100%;

        a {
            width: 100%;
            justify-content: center;
        }

        a:last-child{
            justify-content: right;
        }
    `}
`