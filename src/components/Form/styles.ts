import styled from "styled-components"
import { breakpoints } from "../../styles/responsive"

export const FormContact = styled.form`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px;

    .sending {
        color: #c9bb00ff;
    }

    .success-message {
        color: #03ce58ff;
    }
    
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

        ${breakpoints.mobile`
            border: none;

            &:hover {
                border: none;
                background-color: #21613c;
            }
        `}
    }

    .disabled {
        cursor: not-allowed;
    }
`

export const BlockContact = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;

    b {
        color: red;
    }

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
