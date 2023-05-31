import styled from "styled-components";

export const FooterStyle = styled.footer`
    background-color: white;
    @media (min-width: 992px) {
        grid-area: 3 / 2 / 4 / 3;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        z-index: 100;
    }

    @media (max-width: 992px) {
        display: none;
    }

    box-shadow: 2px -2px 4px rgba(0, 0, 0, 0.25);
`;