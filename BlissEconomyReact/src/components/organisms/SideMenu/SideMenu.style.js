import styled from "styled-components";

export const SideMenuStyle = styled.aside`
    background-color: ${({ theme }) => theme.colors.greyMedium};
    z-index: 100;
    @media (min-width: 992px) {
        grid-area: 1 / 1 / 4 / 2;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        box-shadow: 3px 2px 4px rgba(0, 0, 0, 0.25);
    }

    @media (max-width: 992px) {
        display: flex;
        flex-direction: column;
        position: fixed;
        left: -120vw;
        width: 100vw;
        height: 100vh;
        min-height: 100vh;
        transition: left 600ms ease-in-out;

        left: ${({ active }) => (active ? "0" : "-120vw")};
    }
`;

export const SideMenuLogoStyle = styled.div`
    margin-left: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 2.5rem;

    @media (max-width: 992px) {
        display: none;
    }
`;

export const CloseButtonStyle = styled.button`
    background-color: transparent;
    border: none;
    align-self: start;
    margin-left: 2.5rem;
    margin-top: 1.5rem;
    cursor: pointer;

    @media (min-width: 992px) {
        display: none;
    }
`;

export const SideMenuNavStyle = styled.nav`
    direction: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
`;

export const SideMenuFooterStyle = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    align-items: center;
    padding-bottom: 1rem;
`;

