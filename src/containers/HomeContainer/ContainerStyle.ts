import styled from "styled-components";
import { breakpoints } from "../../styles/responsive";

export const Container = styled.main`
    overflow-x: hidden;
    display: flex;
    flex-direction: column;

    ${breakpoints.mobile`
        width: 100%;
    `}
`