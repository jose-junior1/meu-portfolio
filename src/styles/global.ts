import { createGlobalStyle } from "styled-components";
import bgImage from "../assets/img/background-front_end.jpg"
import { breakpoints } from "./responsive";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    body {
        min-height: 100vh;
        font-family: 'Inter', sans-serif;
    }

    body::before {
        content: "";
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        background-image: 
            linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
            url(${bgImage});
        background-size: cover;
        background-position: center;
        z-index: -1;
        background-attachment: scroll;

        ${breakpoints.mobile`
            background-attachment: scroll;
        `}
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
        font-family: inherit;
    }

    h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 34px;
        text-transform: uppercase;
        margin-bottom: 30px;
        text-align: center;
        color: #f1f1f1;
    }

    span {
        color: #00BCD4;
        font-weight: bold;
    }

    .link-ativo {
        color: #00BCD4;
    }
`