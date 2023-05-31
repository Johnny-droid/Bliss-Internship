import React from "react";
import { ListItem, Loader } from "../../molecules";
import { ContainerStyle, FailedLoadStyle, ListStyle, TitleStyle } from "./LastTransactions.style";
import STATUS from "../../../stores/status.js";

function LastTransactions({dashboardInfo}) {
    const { dashboard, status, error } = dashboardInfo;
    const lastTransactions = dashboard.lastTransac;

    return (  
        <ContainerStyle>
            <TitleStyle>Last Transactions</TitleStyle>
            <ListStyle>
                {status === STATUS.SUCCEEDED && lastTransactions.map((transaction, index) => (
                    <ListItem key={index} transaction={transaction}/>
                ))}
                {status === STATUS.LOADING && <Loader></Loader>}
                {status === STATUS.FAILED && <FailedLoadStyle>Failed to load data: {error}</FailedLoadStyle>}
                
            </ListStyle>
        </ContainerStyle>
    );
}

export default LastTransactions;