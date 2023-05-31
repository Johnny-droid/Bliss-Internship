import { CloseButtonStyle } from "./CloseButton.style";
import closeIcon from "../../../assets/icon_close_modal.png";

function CloseButton({onClick}) {
    return (  
        <CloseButtonStyle onClick={onClick}>
            <img src={closeIcon} alt="Close Icon"/>
        </CloseButtonStyle>
    );
}

export default CloseButton;