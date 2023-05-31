import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TransactionsTable, Modal } from "../../components/organisms";
import { TransactionsStyle } from "./Transactions.style";
import { selectTransactions, getAllTransactions } from "../../stores/transactions-slice";

function Transactions() {
  // Handle if modal is open or not and its information from edit
  const [modalShow, setModalShow] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    mainTitle: "",
    colorName: "",
    value: 0,
    created: "",
    title: "",
    description: "",
  });

  // Use Redux to get transactions
  const dispatch = useDispatch();
  const transactionsInfo = useSelector(selectTransactions);

  useEffect(() => {
    dispatch(getAllTransactions());
  }, []);

  return (
    <TransactionsStyle>
      <TransactionsTable
        setModalShow={setModalShow}
        setModalInfo={setModalInfo}
        transactionsInfo={transactionsInfo}
      />
      {modalShow && (
        <Modal
          modalInfo={modalInfo}
          setModalInfo={setModalInfo}
          setModalShow={setModalShow}
        />
      )}
    </TransactionsStyle>
  );
}

export default Transactions;
