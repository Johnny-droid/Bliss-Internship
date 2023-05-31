import styled from "styled-components";

export const ListItemImgStyle = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    padding: 0.5rem;
    border-radius: 5px;
    margin-right: 3rem;
    background-color: ${props => props.theme.colors.greySemiDark};
`;