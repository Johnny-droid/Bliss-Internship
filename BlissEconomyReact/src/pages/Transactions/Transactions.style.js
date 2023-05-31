import styled from "styled-components";

export const TransactionsStyle = styled.main`
    background-color: ${({ theme }) => theme.colors.main};

    @media (min-width: 992px) {
        grid-area: 2 / 2 / 3 / 3;
        padding-left: 5rem;
        padding-right: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    @media (max-width: 992px) {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        margin-top: 6rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        width: 100%;
        min-height: calc(100vh - 6rem);
    }
`;

