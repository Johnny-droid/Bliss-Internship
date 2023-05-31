import React, { useContext } from "react";
import { CardMainTitle, CardMainPrice, CardMainIcon } from "../../atoms";
import { CardMainStyle, CardMainInfoContainer, PriceHidden} from "./CardMain.style.js";
import { MoneyHideContext } from "../../../stores/settings-store";

function CardMain({ title, value, colorName }) {
  const [moneyHide, setMoneyHide] = useContext(MoneyHideContext);

  return (
    <CardMainStyle>
      <CardMainTitle colorName={colorName}>{title}</CardMainTitle>
      <CardMainInfoContainer>
        <CardMainIcon colorName={colorName} />
        {moneyHide ? (
          <PriceHidden />
        ) : (
          <CardMainPrice colorName={colorName} value={value} />
        )}
      </CardMainInfoContainer>
    </CardMainStyle>
  );
}

export default CardMain;
