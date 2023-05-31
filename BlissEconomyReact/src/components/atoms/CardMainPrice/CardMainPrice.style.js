import styled from 'styled-components';

export const CardMainPriceStyle = styled.span`
    font-weight: bold;
    font-size: 2rem;
    line-height: 2.25rem;
    margin-left: 1rem;
    color: ${props => props.theme.colors[props.colorName]};
`;  