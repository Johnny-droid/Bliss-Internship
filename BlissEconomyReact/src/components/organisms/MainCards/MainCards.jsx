import React from 'react';
import { CardMain } from '../../molecules';
import { MainCardsStyle } from './MainCards.style.js';

function MainCards({dashboardInfo}) {
    const { dashboard, status } = dashboardInfo;

    return (
        <MainCardsStyle>
            <CardMain title="Incomes" value={dashboard.income} colorName="positive"/>
            <CardMain title="Expenses" value={dashboard.expense} colorName="negative"/>
            <CardMain title="Account&nbsp;balance" value={dashboard.balance} colorName="primary"/>
        </MainCardsStyle>
    );
}

export default MainCards;