import React, { useContext } from "react";
import { CardMainIcon, ListItemImg } from "../../atoms";
import {
  ListItemArrowContainer,
  ListItemContainer,
  ListItemDataAndPriceContainer,
  ListItemDateStyle,
  ListItemDescriptionStyle,
  ListItemImgContainer,
  ListItemPriceStyle,
  ListItemTextContainer,
  ListItemTitleStyle,
  ListItemPriceHidden,
} from "./ListItem.style";
import { MoneyHideContext } from "../../../stores/settings-store";

function ListItem({ transaction }) {
  const [moneyHide, setMoneyHide] = useContext(MoneyHideContext);

  return (
    <ListItemContainer>
      <ListItemArrowContainer>
        <CardMainIcon
          colorName={transaction.type ? "negative" : "positive"}
          width={40}
          height={40}
        />
      </ListItemArrowContainer>

      <ListItemImgContainer>
        <ListItemImg path={"icon_image.png"} />
      </ListItemImgContainer>

      <ListItemTextContainer>
        <ListItemTitleStyle>{transaction.title}</ListItemTitleStyle>
        <ListItemDescriptionStyle>
          {transaction.description}
        </ListItemDescriptionStyle>
      </ListItemTextContainer>

      <ListItemDataAndPriceContainer>
        <ListItemDateStyle>{transaction.created.slice(0, 10)}</ListItemDateStyle>
        {moneyHide ? (<ListItemPriceHidden />) : (
          <ListItemPriceStyle>
            €&nbsp;{transaction.value.toFixed(2).toString().replace(".", ",")}
          </ListItemPriceStyle>
        )}
      </ListItemDataAndPriceContainer>
    </ListItemContainer>
  );
}

export default ListItem;
