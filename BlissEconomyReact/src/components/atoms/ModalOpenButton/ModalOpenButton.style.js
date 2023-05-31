import styled from "styled-components";

export const ButtonStyle = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    background-color: transparent;
    padding: 1rem;
    cursor: pointer;
`;

export const ButtonTitleStyle = styled.span`
    color: ${(props) => props.theme.colors[props.colorName]};
`;