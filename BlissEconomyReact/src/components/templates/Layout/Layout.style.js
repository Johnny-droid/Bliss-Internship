import styled from "styled-components";

export const LayoutStyle = styled.div`
    @media (min-width: 992px) {
        display: grid;
        grid-template: 3rem 1fr 3rem / 12.5rem 1fr;
    }

    @media (max-width: 992px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

