import styled from "styled-components";

export const HeaderStyle = styled.header`
    @media (min-width: 992px) {
        grid-area: 1 / 2 / 2 / 3;
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        z-index: 100;
    }

    @media (max-width: 992px) {
        display: flex;
        position: fixed;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 5.75rem;
        z-index: 20;
    }
    background-color: white;
    box-shadow: 3px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const HeaderLogoStyle = styled.img`
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    width: 108px;
    height: 36px;
    @media (min-width: 992px) {
        display: none;
    }
`;

export const OpenMenuButtonStyle = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    @media (min-width: 992px) {
        display: none;
    }

    @media (max-width: 992px) {
        position: absolute;
        top: 2.5rem;
        left: 2.5rem;
    }
`;

export const HeaderEyeButtonHideStyle = styled.button`
    border: 0px;
    background-color: transparent;
    margin-right: 1rem;
    cursor: pointer;

    @media (max-width: 992px) {
        display: none;
    }
`;

export const HeaderEyeButtonShowStyle = styled.button`
    border: 0px;
    background-color: transparent;
    margin-right: 1rem;
    cursor: pointer;

    @media (max-width: 992px) {
        display: none;
    }
`;