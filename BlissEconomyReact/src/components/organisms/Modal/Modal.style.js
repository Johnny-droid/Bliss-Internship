import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 120;
    min-width: 43.75rem;
    min-height: 31.25rem;
    background-color: ${({ theme }) => theme.colors.greyMedium};
    padding: 1rem;
    border-radius: 20px;
`;

export const Close = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: 100%;
    min-height: 2rem;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1.25rem;
`;

export const Title = styled.h4`
    font-weight: 600;
    font-size: 2rem;
    color: ${({ theme, colorName }) => theme.colors[colorName]};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const MainFormContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-grow: 2;
    padding: 0 2rem;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;

`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

export const Label = styled.label`
    align-self: start;
    font-weight: 400;
    font-size: 1rem;
    color: ${({ theme, colorName }) => theme.colors[colorName]};
`;

export const LabelCenter = styled.label`
    align-self: center;
    font-weight: 400;
    font-size: 1rem;
    color: ${({ theme, colorName }) => theme.colors[colorName]};
`;

export const Input = styled.input`
    border: none;
    border-radius: 5px;
`;

export const TextArea = styled.textarea`
    border: none;
    border-radius: 5px;
`;

export const SubmitContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: end;
    width: 100%;
`;

