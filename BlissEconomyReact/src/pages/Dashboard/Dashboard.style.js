import styled from "styled-components";

export const DashboardStyle = styled.main`
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
        justify-content: space-around;
        align-items: center;
        padding: 1rem;
        width: 100%;
        margin-top: 6rem;
    }
`;

export const DashboardMainCardsStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const DashboardTitleStyle1 = styled.h1`
    display: none;
`;

export const DashboardTitleStyle2 = styled.h2`
    
    font-weight: 700;
    font-size: 1.25rem;
    margin-top: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};

    @media (min-width: 992px) {
        align-self: start;
    }
`;