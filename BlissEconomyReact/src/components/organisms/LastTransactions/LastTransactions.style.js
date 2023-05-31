import styled from "styled-components";

export const ContainerStyle = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.75rem;
    
    @media (min-width: 992px) {
        width: 100%;
    }

    @media (max-width: 992px) {
        align-items: center;
        width: 20rem;
    }
`;

export const TitleStyle = styled.h3`
    align-self: start;
    font-weight: 700;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primary};
`;

export const ListStyle = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    padding-left: 0rem;
`;

export const FailedLoadStyle = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.negative};
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;

