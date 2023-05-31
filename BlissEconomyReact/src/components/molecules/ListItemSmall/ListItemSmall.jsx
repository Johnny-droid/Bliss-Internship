import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTransaction, getAllTransactions } from "../../../stores/transactions-slice";
import { CardMainIcon } from "../../atoms";
import { ListItemStyle, ItemAction, ItemDate, ItemDescrition, ItemTransaction, ItemValue, ButtonAction } from "./ListItemSmall.style";
import iconTrash from "../../../assets/icon_trash.png";
import iconEdit from "../../../assets/icon_edit.png";
import iconAttach from "../../../assets/icon_attach_square.png"; 
import Notice from "../Notice/Notice";

function ListItemSmall({transaction, setModalShow, setModalInfo}) {
    let alt;
    const [noticeShow, setNoticeShow] = useState(false);
    const { title, description, created, value , type, id} = transaction;
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeTransaction(id));
        dispatch(getAllTransactions());
    }

    if (type) {
        alt = "Expense Icon";
    } else {
        alt = "Income Icon";
    }

    return (  
    <>
        <ListItemStyle>
            <ItemTransaction>
                <CardMainIcon
                    colorName={type ? "negative" : "positive"}
                    width={24}
                    height={24}
                />
            </ItemTransaction>
            <ItemDate>{created && created.slice(0, 10)}</ItemDate>
            <ItemDescrition>{title} - {description}</ItemDescrition>
            <ItemValue>{value}</ItemValue>
            <ItemAction>
                <ButtonAction>
                    <img src={iconAttach} alt="Icon Attach" width={16} height={16}/>
                </ButtonAction>
                <ButtonAction onClick={() => {
                    setModalShow(true); 
                    setModalInfo({
                        mainTitle: "Edit Transaction",
                        colorName: "primary",
                        type: type, 
                        id: id,
                        title: title,
                        description: description,
                        value: value,
                        created: created,
                    })
                }}>
                    <img src={iconEdit} alt="Icon Edit Transaction" width={16} height={16}/>
                </ButtonAction>
                <ButtonAction onClick={() => setNoticeShow(true)}>
                    <img src={iconTrash} alt="Icon Delete Transaction" width={16} height={18}/>
                </ButtonAction>
            </ItemAction>
        </ListItemStyle>
        { noticeShow && (
            <Notice 
                title="Delete Transaction"
                description="Are you sure you want to delete this transaction?"
                setClose={() => setNoticeShow(false)}
                setAction={() => {
                    handleDelete()
                    setNoticeShow(false)
                }}
            />
        )}
    </>
        
    );
}

export default ListItemSmall;