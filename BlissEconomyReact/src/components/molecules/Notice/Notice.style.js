import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 120;
    width: 30%;
    padding: 1.5rem;
    min-width: 21rem;
    min-height: 15rem;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.greyMedium};
`;  

export const CloseContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
`;

export const Title = styled.h4`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 400;
    text-align: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

