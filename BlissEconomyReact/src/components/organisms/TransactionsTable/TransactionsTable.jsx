import React, { useState, useContext, useEffect } from "react";
import { ModalOpenButton } from "../../atoms";
import { ListItemSmall, Loader } from "../../molecules";
import {
  TableStyle,
  TitleStyle,
  TopStyle,
  ButtonsContainer,
  HeaderStyle,
  ListStyle,
  ItemTransaction,
  ItemDate,
  ItemDescrition,
  ItemValue,
  ItemAction,
  BottomStyle,
  PageNumberStyle,
  ButtonBack,
  ButtonNext,
  FailedLoadStyle,
} from "./TransactionsTable.style";
import STATUS from "../../../stores/status.js";

const limit = 15;

function TransactionsTable({ setModalShow, setModalInfo, transactionsInfo}) {
  const { transactions, status, error } = transactionsInfo;
  const [page, setPage] = React.useState(1);
  let currentTransactions = [...transactions].reverse().slice((page-1)*limit, page*limit);
  let maxPage = Math.ceil(transactions.length/limit);

  return (
    <TableStyle>
      <TopStyle>
        <TitleStyle>Transactions</TitleStyle>
        <ButtonsContainer>
          <ModalOpenButton
            key="modal_open_income"
            title="Income"
            path="icon_wallet_add_green.png"
            colorName="positive"
            alt="Icon Add Income"
            onClick={function() {
              setModalShow(true); 
              setModalInfo({mainTitle: "Income", colorName: "positive", type: 0})
            }}
          />
          <ModalOpenButton
            key="modal_open_expense"
            title="Expense"
            path="icon_wallet_minus_red.png"
            colorName="negative"
            alt="Icon Add Expense"
            onClick={function() {
              setModalShow(true); 
              setModalInfo({mainTitle: "Expense", colorName: "negative", type: 1})
            }}
          />
        </ButtonsContainer>
      </TopStyle>

      <ListStyle>
        <HeaderStyle key="TransactionsTableHeader">
          <ItemTransaction>Transaction</ItemTransaction>
          <ItemDate>Date</ItemDate>
          <ItemDescrition>Description</ItemDescrition>
          <ItemValue>Value</ItemValue>
          <ItemAction>Action</ItemAction>
        </HeaderStyle>

        {status === STATUS.SUCCEEDED && currentTransactions.map((transaction, index) => (
          <ListItemSmall key={"Item"+index} transaction={transaction} setModalShow={setModalShow} setModalInfo={setModalInfo}/>
        ))}
        {status === STATUS.LOADING && <Loader>Loading...</Loader>}
        {status === STATUS.FAILED && <FailedLoadStyle>Failed to load data: {error}</FailedLoadStyle>}
      </ListStyle>

      <BottomStyle>
        <PageNumberStyle>{page} de {maxPage}</PageNumberStyle>
        <ButtonBack page={page} maxPage={maxPage} onClick={() => setPage(1)}>|&lt;</ButtonBack>
        <ButtonBack page={page} maxPage={maxPage} onClick={() => setPage((page <= 1 ? 1 : page-1))}>&lt;</ButtonBack>
        <ButtonNext page={page} maxPage={maxPage} onClick={() => setPage((page >= maxPage ? maxPage : page+1))}>&gt;</ButtonNext>
        <ButtonNext page={page} maxPage={maxPage} onClick={() => setPage(maxPage)}>&gt;|</ButtonNext>
      </BottomStyle>
    </TableStyle>
  );
}

export default TransactionsTable;
