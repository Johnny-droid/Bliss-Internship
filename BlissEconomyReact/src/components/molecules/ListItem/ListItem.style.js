import styled from "styled-components";

export const ListItemContainer = styled.li`
    display: flex;
    flex-direction: row;
    background-color: white;
    margin-bottom: 1rem;
    padding-left: 1.25rem;
    padding-right: 1rem;
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    overflow: hidden;

    @media (min-width: 992px) {
        align-items: center;
    }

    @media (max-width: 992px) {
        flex-wrap: wrap;
        padding: 1.5rem;
    }
`;

// 1st div ================================================
export const ListItemArrowContainer = styled.div`
    @media (min-width: 992px) {
        margin-left: 1.25rem;
        margin-right: 2.75rem;
    }
    

    @media (max-width: 992px) {
        display: flex;
        justify-content: start;
        align-items: center;
        
        width: 50%;
        height: 50%;
    }
`;

// 2nd div ================================================
export const ListItemImgContainer = styled.div`
    @media (max-width: 992px) {
        display: none;
    }

    margin-right: 5rem;
`;

// 3rd div ================================================
export const ListItemTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    @media (min-width: 992px) {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-right: 5rem;
        flex-grow: 500;
    }

    @media (max-width: 992px) {
        width: 100%;
        height: 50%;
        order: 100;
    }
`;

export const ListItemTitleStyle = styled.h4`
    color: ${props => props.theme.colors.greySuperDark};
    font-size: 0.875rem;
    font-weight: 700;
    margin: 0;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    @media (min-width: 992px) {
        display: flex;
        flex-direction: row;
        justify-content: start;
        width: 100%;
    }
`;

export const ListItemDescriptionStyle = styled.p`
    color: ${props => props.theme.colors.greySuperDark};
    font-size: 0.75rem;
    font-weight: 400;
    margin: 0;
    margin-bottom: 1rem;
    text-align: start;
    @media (min-width: 992px) {
        display: flex;
        flex-direction: row;
        justify-content: start;
        width: 100%;
    }
`;

// 4th div ================================================
export const ListItemDataAndPriceContainer = styled.div` 
    @media (min-width: 992px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-grow: 1;
    }

    @media (max-width: 992px) {
        display: flex;
        flex-direction: column;
        align-items: end;
        width: 50%;

    }
`;

export const ListItemDateStyle = styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme.colors.greySuperDark};

    @media (min-width: 992px) {
        margin-right: 3.5rem;
    }
`;

export const ListItemPriceStyle = styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme.colors.greySuperDark};

    @media (min-width: 992px) {
        margin-right: 3.5rem;
    }

    @media (max-width: 992px) {
        order: -1;
    }
`;


export const ListItemPriceHidden = styled.div`
    background-color: ${props => props.theme.colors.greySemiDark};
    height: 4px;
    width: 3rem;
    align-self: center;

    @media (min-width: 992px) {
        margin-right: 3.5rem;
    }

    @media (max-width: 992px) {
        order: -1;
    }
`;

