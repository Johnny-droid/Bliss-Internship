import styled from "styled-components";

export const FormButtonStyle = styled.button`
    color: white;
    border: none;
    width: 6rem;
    margin-right: 1.25rem;
    border-radius: 5px;
    height: 1.5rem;
    background-color: ${({ theme, colorName }) => theme.colors[colorName]};
`;
