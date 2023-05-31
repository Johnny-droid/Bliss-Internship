import styled from "styled-components";

export const BalanceChartStyle = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;

    @media (min-width: 992px) {
        width: 100%;
    }

    @media (max-width: 992px) {
        width: 80vw;
    }
    
`;

export const BalanceChartTitle = styled.h3`
    align-self: start;
    font-weight: 700;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primary};
`;


export const BalanceChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    background-color: white;
`;

export const SelectOption = styled.select`
    align-self: end;
    margin-right: 1.25rem;
    margin-top: 1.25rem;
    border-width: 0px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.primary};
`;
