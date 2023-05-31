import styled from "styled-components";
import { keyframes } from "styled-components";

export const LoaderAnimation = keyframes` 
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const LoaderStyle = styled.div`
    margin-top: 1rem;
    align-self: center;
    border: 16px solid ${({ theme }) => theme.colors.greyLight};
    border-top: 16px solid ${({ theme }) => theme.colors.primary}; 
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    animation-name: ${LoaderAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;
