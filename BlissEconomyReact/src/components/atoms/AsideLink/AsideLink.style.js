import styled from "styled-components";
import { Link } from "react-router-dom";

export const AsideLinkStyle = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    padding: 1.25rem;
    &:hover {
        background-color: #e1e1e1;
    }

    background-color: ${({ $active, theme }) => (
        $active && theme.colors.greySemiDark
    )};

`;

export const AsideLinkIconStyle = styled.img`
    margin-left: 0.75rem;
    margin-right: 1.25rem;
    fill: ${({ theme }) => theme.colors.ternary};
`;

export const LinkStyle = styled.span`
    color: ${({$active, theme }) => $active ? theme.colors.ternary : theme.colors.greyDark};
    font-weight: 600;
    font-size: 0.875rem;
`;