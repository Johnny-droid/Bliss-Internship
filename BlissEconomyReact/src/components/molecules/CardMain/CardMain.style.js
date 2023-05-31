import styled from 'styled-components';

export const CardMainStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem;
    height: 8rem;
    width: 20rem;
    border-radius: 6px;
    background-color: white;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const CardMainInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.75rem;
    margin-left: 1.25;
    margin-right: 1.25;
`;

export const PriceHidden = styled.div`
    background-color: ${props => props.theme.colors.greySemiDark};
    height: 8px;
    width: 8rem;
    margin-left: 1rem;
    border-radius: 4px;
`;