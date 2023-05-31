import styled from 'styled-components';

export const TableStyle = styled.section`
    background-color: white;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    @media (min-width: 992px) {
        width: 100%;
        margin: 2rem 0;
    }

    @media (max-width: 992px) {
        margin-left: 2rem;
        margin-right: 2rem;
    }
`;

export const TopStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;

export const TitleStyle = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: 14px;
    margin-left: 2rem;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 1rem;
`;

export const ListStyle = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0;
`;

export const HeaderStyle = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    font-weight: 600;
    font-size: 12px;
    background-color: ${({ theme }) => theme.colors.greyLight};
    color: ${({ theme }) => theme.colors.greySuperDark};
    height: 2.5rem;

    @media (max-width: 992px) {
        display: none;
    }
`;

export const ItemTransaction = styled.span`
    text-align: center;
    width: 15%;
`;

export const ItemDate = styled.span`
    text-align: start;
    width: 10%;
`;

export const ItemDescrition = styled.span`
    text-align: start;
    width: 50%;
`;

export const ItemValue = styled.span`
    text-align: center;
    width: 15%;
`;

export const ItemAction = styled.div`
    text-align: center;
    width: 10%;
`;


export const BottomStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    height: 3rem;
    margin-right: 1.25rem;
    font-weight: 400;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.greySuperDark};
`;

export const PageButtonStyle = styled.button`
    border: none;
    background-color: transparent;
    margin: 0 0.1rem;
`;

export const ButtonBack = styled(PageButtonStyle)`
    color: ${({ page, theme}) => (page <= 1 ? theme.colors.greySemiDark : theme.colors.greySuperDark)};
    cursor: ${({ page }) => (page <= 1 ? 'not-allowed' : 'pointer')};
`;

export const ButtonNext = styled(PageButtonStyle)`
    color: ${({ page, maxPage, theme}) => (page >= maxPage  ? theme.colors.greySemiDark : theme.colors.greySuperDark)};
    cursor: ${({ page, maxPage }) => (page >= maxPage ? 'not-allowed' : 'pointer')};
`;


export const PageNumberStyle = styled.span`
    margin-right: 1rem;
`;


export const FailedLoadStyle = styled.div`
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors.negative};
`;