import styled from 'styled-components';

export const BackgroundStyle = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 110;
    top: 0;
    left: 0;
    opacity: 0.5;
    background-color: ${({ theme }) => theme.colors.greySuperDark};
`;