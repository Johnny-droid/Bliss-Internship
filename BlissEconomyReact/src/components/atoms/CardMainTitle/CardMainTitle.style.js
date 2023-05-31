import styled from 'styled-components';

export const CardMainTitleStyle = styled.h3`
    margin-top: 0.75rem;
    margin-bottom: 1rem;
    padding-left: 6rem;
    padding-right: 6rem;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: ${props => props.theme.colors[props.colorName]};
`;


