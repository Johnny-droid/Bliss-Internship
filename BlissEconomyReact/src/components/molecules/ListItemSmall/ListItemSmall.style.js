import styled from "styled-components";

export const ListItemStyle = styled.li`
    display: flex;
    font-weight: 400;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.greySuperDark};
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyDark};
    width: 100%;

    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box; 

    @media (min-width: 992px) {
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        height: 2.5rem;
        padding: 0;
    }

    @media (max-width: 992px) {
        flex-wrap: wrap;
        justify-content: end;
        align-items: center;
        padding: 0.7rem;
        max-width: 25rem;
        &:nth-child(2) {
            border-top: 1px solid ${({ theme }) => theme.colors.greyDark};
        }
    }
`;

export const ItemTransaction = styled.span`
    @media (min-width: 992px) {
        width: 15%;
        text-align: center;
    }

    @media (max-width: 992px) {
        order: 2;
        width: 17%;
        text-align: end;
    }
`;

export const ItemDate = styled.span`
    text-align: start;

    @media (min-width: 992px) {
        width: 10%;
    }
    
    @media (max-width: 992px) {
        display: flex;
        width: 50%;
        margin-bottom: 1rem;
    }
    
`;

export const ItemDescrition = styled.span`
    text-align: start;

    @media (min-width: 992px) {
        width: 50%;
    }

    @media (max-width: 992px) {
        margin-right: auto;
        width: 75%;
        order: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

`;

export const ItemValue = styled.span`
    text-align: center;

    @media (min-width: 992px) {
        width: 15%;
    }

    @media (max-width: 992px) {
        order: 3;
        width: 8%;
    }
`;

export const ItemAction = styled.div`
    display: flex;

    @media (min-width: 992px) {
        width: 10%;
        justify-content: center;
    }
    
    @media (max-width: 992px) {
        width: 50%;
        justify-content: end;
    }
`;

export const ButtonAction = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin: 0
`;

