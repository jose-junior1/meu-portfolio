import { createGlobalStyle } from "styled-components";
import bgImage from "../assets/img/background-front_end.jpg"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    -ms-hyphenate-limit-chars, body {
        height: 100%;
    }

    body {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        font-family: 'Inter', sans-serif;
    }

    body::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: 
            linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
            url(${bgImage});
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
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
    }
`