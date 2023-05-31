import styled from 'styled-components';

export const MainCardsStyle = styled.section`
    display: flex;
    margin-bottom: 2.5rem;
    
    @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
`;